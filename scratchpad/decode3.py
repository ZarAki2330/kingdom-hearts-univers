#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Décode un fichier tool-results du navigateur en webp, en détourant **proprement**.

Correction du liseré sombre. Les PNG du wiki portent du noir (ou du blanc) dans leurs
pixels transparents : l'information de couleur n'y est pas définie. En réduisant l'image,
LANCZOS moyenne les canaux R, V et B **indépendamment** de l'alpha, si bien que ce noir
invisible déteint sur les pixels de bord qui, eux, restent visibles — d'où le halo sale
autour du personnage, surtout net sur fond clair.

Deux corrections, dans l'ordre :

1. « Bleed » : on étale la couleur des pixels opaques dans la zone transparente, par
   dilatations successives, pour que les pixels transparents portent la couleur de leur
   voisin visible au lieu de noir.
2. Redimensionnement en alpha prémultiplié : on multiplie R, V, B par alpha avant de
   réduire, puis on divise après. C'est la seule façon mathématiquement correcte de
   réduire une image détourée.

usage : decode3.py <fichier> <json {nom wiki: [chemin de sortie, taille max]}>
"""
import base64, io, json, sys
import numpy as np
from PIL import Image


def bleed(rgba: np.ndarray, passes: int = 12) -> np.ndarray:
    """Étale la couleur des pixels visibles dans la zone transparente."""
    rgb = rgba[..., :3].astype(np.float32)
    known = rgba[..., 3] > 8
    for _ in range(passes):
        if known.all():
            break
        # moyenne des voisins connus, en 4-connexité
        acc = np.zeros_like(rgb)
        cnt = np.zeros(known.shape, np.float32)
        for dy, dx in ((1, 0), (-1, 0), (0, 1), (0, -1)):
            r = np.roll(rgb, (dy, dx), (0, 1))
            k = np.roll(known, (dy, dx), (0, 1))
            acc += r * k[..., None]
            cnt += k
        fill = (~known) & (cnt > 0)
        if not fill.any():
            break
        rgb[fill] = acc[fill] / cnt[fill][..., None]
        known = known | fill
    out = rgba.copy()
    out[..., :3] = np.clip(rgb, 0, 255).astype(np.uint8)
    return out


def shrink(im: Image.Image, size: int) -> Image.Image:
    """Réduit une image détourée sans salir ses bords (alpha prémultiplié)."""
    if im.mode != "RGBA":
        im = im.convert("RGB")
        im.thumbnail((size, size), Image.LANCZOS)
        return im
    a = bleed(np.asarray(im, dtype=np.uint8))
    alpha = a[..., 3].astype(np.float32) / 255.0
    pre = np.concatenate([a[..., :3].astype(np.float32) * alpha[..., None], a[..., 3:].astype(np.float32)], axis=2)
    pim = Image.fromarray(np.clip(pre, 0, 255).astype(np.uint8), "RGBA")
    pim.thumbnail((size, size), Image.LANCZOS)
    p = np.asarray(pim, dtype=np.float32)
    al = p[..., 3:] / 255.0
    rgb = np.where(al > 0.004, p[..., :3] / np.maximum(al, 1e-6), 0.0)
    out = np.concatenate([np.clip(rgb, 0, 255), p[..., 3:]], axis=2).astype(np.uint8)
    return Image.fromarray(out, "RGBA")


if __name__ == "__main__":
    path, mapping = sys.argv[1], json.loads(sys.argv[2])
    raw = open(path, encoding="utf-8", errors="replace").read()
    i = raw.index('"text": "') + len('"text": ')
    dec = json.JSONDecoder()
    cur, _ = dec.raw_decode(raw[i:])
    while isinstance(cur, str):
        nxt, _ = dec.raw_decode(cur)
        if not isinstance(nxt, (str, dict)):
            break
        cur = nxt

    for name, data in cur.items():
        if data == "MISSING":
            print("MANQUANT", name)
            continue
        out, size = mapping[name]
        im = Image.open(io.BytesIO(base64.b64decode(data.split(",", 1)[1])))
        im = im.convert("RGBA") if im.mode in ("RGBA", "LA", "P") else im.convert("RGB")
        im = shrink(im, size)
        im.save(out, "WEBP", quality=92, method=6)
        print("%-42s -> %-62s %dx%d %s" % (name, out, im.width, im.height, im.mode))

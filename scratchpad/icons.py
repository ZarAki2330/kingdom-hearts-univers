"""Génère les icônes et l'image de partage à partir du tracé exact de l'emblème du site."""
import cairosvg, io, glob, random
from PIL import Image, ImageDraw, ImageFont, ImageFilter

HEART = ("M32 56 C32 56 6 40 6 24 C6 14 14 9 20 9 C26 9 30 13 32 17 "
         "C34 13 38 9 44 9 C50 9 58 14 58 24 C58 40 32 56 32 56 Z")
HOLE = '<circle cx="32" cy="29" r="6" fill="{bg}"/><path d="M29.2 32 L26 45 H38 L34.8 32 Z" fill="{bg}"/>'
GOLD, BG = "#e8b84a", "#0b1020"


def emblem_svg(size, pad=0.14, bg=BG, rounded=True):
    inner = 64 / (1 - 2 * pad)
    off = (inner - 64) / 2
    radius = inner * 0.22 if rounded else 0
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {inner} {inner}" width="{size}" height="{size}">
  <rect width="{inner}" height="{inner}" rx="{radius}" fill="{bg}"/>
  <g transform="translate({off},{off})"><path d="{HEART}" fill="{GOLD}"/>{HOLE.format(bg=bg)}</g></svg>'''


def png(size, **kw):
    return Image.open(io.BytesIO(cairosvg.svg2png(bytestring=emblem_svg(size, **kw).encode(),
                                                  output_width=size, output_height=size))).convert("RGBA")


def icons():
    png(512).save("public/icon-512.png")
    png(192).save("public/icon-192.png")
    png(180, pad=0.10).save("public/apple-touch-icon.png")
    png(64, pad=0.06).save("public/favicon.ico", format="ICO", sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])


def og():
    W, H = 1200, 630
    img = Image.new("RGB", (W, H), BG)
    d = ImageDraw.Draw(img)
    for y in range(H):
        t = y / H
        d.line([(0, y), (W, y)], fill=(int(11 + 20 * t), int(16 + 26 * t), int(32 + 58 * t)))
    halo = Image.new("RGB", (W, H), BG)
    hd = ImageDraw.Draw(halo)
    hd.ellipse([-260, -360, 720, 400], fill="#1f3a80")
    hd.ellipse([820, 300, 1500, 900], fill="#3a2d10")
    img = Image.blend(img, halo.filter(ImageFilter.GaussianBlur(150)), 0.55)
    d = ImageDraw.Draw(img)
    random.seed(7)
    for _ in range(90):
        x, y = random.randint(0, W), random.randint(0, H)
        s = random.choice([1, 1, 2])
        d.ellipse([x, y, x + s, y + s], fill=(230, 230, 245))
    svg = f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="{HEART}" fill="{GOLD}"/>{HOLE.format(bg=BG)}</svg>'
    em = Image.open(io.BytesIO(cairosvg.svg2png(bytestring=svg.encode(), output_width=300, output_height=300))).convert("RGBA")
    img.paste(em, (60, 165), em)

    def font(size, bold=True):
        f = glob.glob("/usr/share/fonts/**/DejaVuSerif%s.ttf" % ("-Bold" if bold else ""), recursive=True)
        return ImageFont.truetype(f[0], size) if f else ImageFont.load_default()

    X = 400
    def fit(text, size, bold=True, max_w=W - X - 60):
        f = font(size, bold)
        while d.textlength(text, font=f) > max_w and size > 12:
            size -= 2
            f = font(size, bold)
        return f

    d.text((X, 200), "KINGDOM HEARTS", font=fit("KINGDOM HEARTS", 72), fill=(240, 238, 250))
    d.text((X + 2, 286), "U N I V E R S", font=fit("U N I V E R S", 46), fill=(232, 184, 74))
    d.rectangle([X, 356, X + 500, 359], fill=(70, 82, 125))
    d.text((X, 380), "L'encyclopédie francophone de la saga", font=fit("L'encyclopédie francophone de la saga", 32, False), fill=(184, 193, 220))
    d.text((X, 432), "Jeux · Personnages · Mondes · Keyblades · Histoire", font=fit("Jeux · Personnages · Mondes · Keyblades · Histoire", 26, False), fill=(140, 150, 180))
    img.save("public/og.png", "PNG", optimize=True)


if __name__ == "__main__":
    icons()
    og()
    print("icônes et image de partage régénérées")

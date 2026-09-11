@echo off
REM Envoi des modifications sur GitHub, en un double-clic.
REM Usage : double-cliquer, ou « push.bat "mon message de commit" » depuis un terminal.
setlocal
cd /d "%~dp0"

set "MSG=%~1"
if "%MSG%"=="" set "MSG=Mise a jour du site"

echo.
echo === Etat du depot ===
git status --short
if errorlevel 1 goto erreur

echo.
git diff --quiet && git diff --cached --quiet
if not errorlevel 1 (
  echo Rien a envoyer : aucun fichier modifie.
  goto fin
)

echo === Ajout, commit et envoi ===
git add -A
if errorlevel 1 goto erreur
git commit -m "%MSG%"
if errorlevel 1 goto erreur
git push
if errorlevel 1 goto erreur

echo.
echo Termine. Vercel redeploie le site dans la minute.
goto fin

:erreur
echo.
echo *** Une commande git a echoue : lis le message ci-dessus. ***

:fin
echo.
pause
endlocal

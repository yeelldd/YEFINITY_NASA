@echo off
chcp 65001 >nul
cd /d "%~dp0"
where py >nul 2>&1
if %errorlevel%==0 (
  start "LAST CONTACT SERVER" cmd /k "py -m http.server 8000"
) else (
  start "LAST CONTACT SERVER" cmd /k "python -m http.server 8000"
)
timeout /t 2 /nobreak >nul
start "" "http://localhost:8000/"

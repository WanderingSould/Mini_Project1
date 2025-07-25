
@echo off
setlocal

set "FRONTEND_DIR=%~dp0frontend"
set "ENV_FILE=%FRONTEND_DIR%\.env"

if not exist "%ENV_FILE%" (
    echo Error: %ENV_FILE% not found.
    echo Please create a .env file in the 'frontend' directory.
    exit /b 1
)

for /f "tokens=1,* delims==" %%a in ('type "%ENV_FILE%" ^| findstr /R /C:"^OLLAMA_MODEL="') do (
    set "OLLAMA_MODEL=%%b"
)

if not defined OLLAMA_MODEL (
    echo Error: NEXT_PUBLIC_OLLAMA_MODEL not defined in %ENV_FILE%
    exit /b 1
)
echo ============================================
echo Starting Ollama with model: %OLLAMA_MODEL%
echo ============================================
echo.

ollama run %OLLAMA_MODEL%
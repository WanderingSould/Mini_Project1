@echo off
start msedge http://localhost:5173/

:LOOP
cls
echo ================================================
echo Welcome! Project made and run by Swaroop Suresh
echo ================================================

cd /d C:\college\Mini_Project1\frontend

REM start msedge http://localhost:5173/

echo.
echo Running dev servers using concurrently...
echo Press Ctrl+C to stop the servers.

REM Runs the concurrently and wait for it to finish when i press Ctrl+C
call npm run dev

echo.
:ASK
set /p choice=Do you want to restart the dev server? (Y/N): 
if /i "%choice%"=="Y" goto LOOP
if /i "%choice%"=="N" exit

echo Invalid input. Please enter Y or N.
goto ASK

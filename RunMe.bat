
@echo off
:START

echo ====================================================================================
echo Welcome! Project made and run by Swaroop Suresh with a little help from Ai.
echo ====================================================================================

cd C:\college\Mini_Project1\frontend

start msedge http://localhost:5173/

npm run dev


echo Would you like to rerun this script? (Y/N)
set /p choice=Enter your choice: 

if /i "%choice%"=="Y" goto START
if /i "%choice%"=="N" goto END

echo Invalid choice. Please enter Y or N.
goto START

:END
echo Exiting the script. Goodbye!
exit
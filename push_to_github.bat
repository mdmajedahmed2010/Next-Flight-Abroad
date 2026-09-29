@echo off
title GitHub Push - mdmajedahmed2010/OneTech-Education
color 0a
echo ==========================================================
echo   Pushing to GitHub Repository:
echo   https://github.com/mdmajedahmed2010/OneTech-Education.git
echo ==========================================================
echo.
cd /d "C:\Users\Majed\Downloads\Alex-Global-Consultancy-main\Alex-Global-Consultancy-main"
echo Current Remote:
git remote -v
echo.
echo Pushing code to main branch...
git push -u origin main
echo.
if %ERRORLEVEL% EQU 0 (
    echo ==========================================
    echo  [SUCCESS] Code successfully pushed!
    echo ==========================================
) else (
    echo  [FAILED] Could not push. Check error above.
)
echo.
pause

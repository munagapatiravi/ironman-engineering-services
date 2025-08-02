@echo off
echo ========================================
echo   Ironman Engineering Services
echo   Website Deployment Script
echo ========================================
echo.

cd /d "%~dp0"

echo Checking current directory...
echo Current directory: %CD%
echo.

echo Initializing Git repository...
git init

echo Adding all files...
git add .

echo Committing changes...
git commit -m "Deploy optimized Ironman Engineering Services website - Mobile fixes completed"

echo Setting main branch...
git branch -M main

echo Adding remote origin...
git remote add origin https://github.com/munagapatiravi/ironman-engineering-services.git

echo Pushing to GitHub...
git push -u origin main

echo.
echo ========================================
echo   Deployment Complete!
echo ========================================
echo.
echo Your website is now on GitHub!
echo.
echo Next Steps:
echo 1. Go to: https://github.com/munagapatiravi/ironman-engineering-services
echo 2. Click Settings ^> Pages
echo 3. Select "Deploy from a branch" ^> "main" ^> "/ (root)"
echo 4. Your site will be live at: 
echo    https://munagapatiravi.github.io/ironman-engineering-services/
echo.
echo OR deploy to Netlify:
echo 1. Go to: https://netlify.com
echo 2. Click "Add new site" ^> "Import an existing project"
echo 3. Connect GitHub and select your repository
echo 4. Site will be live at: https://ironman-engineering.netlify.app
echo.
pause

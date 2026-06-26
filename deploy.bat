@echo off
echo ==============================================
echo Building and Deploying to GitHub Pages...
echo ==============================================

:: Run build
call npm run build
if %ERRORLEVEL% neq 0 (
    echo [ERROR] Build failed! Exiting.
    exit /b %ERRORLEVEL%
)

:: Move into the dist folder
cd dist

:: Create a .nojekyll file to prevent GitHub Pages from ignoring files that begin with an underscore
echo. > .nojekyll

:: Initialize a new git repository in the build folder
git init
git checkout -b gh-pages
git add -A
git commit -m "deploy: build website"

:: Push the local gh-pages branch to the remote repository
echo Pushing to gh-pages...
git push -f https://github.com/kittyboy06/FB_R1.git gh-pages

:: Navigate back to root
cd ..

echo ==============================================
echo Deployment completed successfully!
echo ==============================================

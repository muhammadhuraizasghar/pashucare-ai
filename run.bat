@echo off
echo Checking dependencies...
if not exist node_modules (
    echo Installing dependencies...
    npm install
) else (
    echo Dependencies already installed.
)

echo Starting the application...
npm run dev

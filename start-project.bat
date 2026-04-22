@echo off

echo Opening VS Code...
start "" code .

echo Starting Vite dev server...
start cmd /k npm run dev

exit
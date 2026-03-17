#!/bin/bash

echo "Starting Next.js app..."

if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm install
fi

# Run the dev server in the background and pipe output to nextjs.log
npm run dev > nextjs.log 2>&1 &
PID=$!
echo $PID > nextjs.pid

echo "App started with PID $PID. Logs are being saved to nextjs.log."

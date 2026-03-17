#!/bin/bash

# Guard: don't start if already running
if [ -f "nextjs.pid" ]; then
  PID=$(cat nextjs.pid)
  if kill -0 "$PID" 2>/dev/null; then
    echo "App is already running (PID: $PID)."
    echo "→ http://localhost:3000"
    exit 0
  else
    echo "Stale nextjs.pid found. Cleaning up..."
    rm nextjs.pid
  fi
fi

echo "Starting EventGraph app..."

# Install dependencies if missing
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm install
fi

# Start in a new process group (setsid) so stop.sh can kill all child processes
setsid npm run dev > nextjs.log 2>&1 &
PID=$!
echo $PID > nextjs.pid

# Wait briefly and confirm the server is up
sleep 3
if kill -0 "$PID" 2>/dev/null; then
  echo "✓ App started (PID: $PID)"
  echo "→ Local:   http://localhost:3000"
  echo "  Logs:    ./nextjs.log"
else
  echo "✗ App failed to start. Check nextjs.log for details."
  rm -f nextjs.pid
  exit 1
fi

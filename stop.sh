#!/bin/bash

if [ -f "nextjs.pid" ]; then
  PID=$(cat nextjs.pid)
  if kill -0 $PID 2>/dev/null; then
    echo "Stopping Next.js app (PID: $PID)..."
    kill $PID
    rm nextjs.pid
    echo "App stopped successfully."
  else
    echo "Process $PID not running. Cleaning up nextjs.pid."
    rm nextjs.pid
  fi
else
  echo "nextjs.pid not found. Searching for 'next dev' processes..."
  pkill -f "next dev"
  if [ $? -eq 0 ]; then
    echo "Stopped running Next.js processes."
  else
    echo "No Next.js processes found."
  fi
fi

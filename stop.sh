#!/bin/bash

kill_by_pgid() {
  local PID=$1
  # Get process group ID of the process and kill the whole group
  PGID=$(ps -o pgid= -p "$PID" 2>/dev/null | tr -d ' ')
  if [ -n "$PGID" ] && [ "$PGID" -ne 1 ]; then
    kill -- "-$PGID" 2>/dev/null
  else
    kill "$PID" 2>/dev/null
  fi
}

if [ -f "nextjs.pid" ]; then
  PID=$(cat nextjs.pid)
  if kill -0 "$PID" 2>/dev/null; then
    echo "Stopping EventGraph app (PID: $PID)..."
    kill_by_pgid "$PID"
    sleep 1
    # Force-kill if still running
    if kill -0 "$PID" 2>/dev/null; then
      kill -9 "$PID" 2>/dev/null
    fi
    rm nextjs.pid
    echo "✓ App stopped."
  else
    echo "Process $PID is no longer running. Cleaning up..."
    rm nextjs.pid
  fi
else
  echo "nextjs.pid not found. Searching for running Next.js processes..."
  pkill -f "next dev"
  if [ $? -eq 0 ]; then
    echo "✓ Stopped running Next.js processes."
  else
    echo "No Next.js processes found."
  fi
fi

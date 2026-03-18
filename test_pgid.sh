#!/bin/bash
set -m
sleep 50 &
PID=$!
ps -o pid,pgid -p $PID
kill -9 $PID

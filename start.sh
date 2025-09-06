#!/bin/bash

echo "🛑 Stopping any process running on port 7999..."
# Find and kill process on port 7999
PID=$(lsof -ti:7999)
if [ ! -z "$PID" ]; then
    kill -9 $PID
    echo "   Killed process $PID on port 7999"
else
    echo "   No process found on port 7999"
fi

echo "🔨 Building sandcastle.html..."
node build-sandcastle.js

echo "🚀 Starting HTTP server on port 7999..."
echo "   Open http://localhost:7999/sandcastle.html in your browser"
echo "   Press Ctrl+C to stop the server"
python3 -m http.server 7999
#!/bin/bash

# Script to run the Project Blood blood donation website (static version)

echo "Starting Project Blood application..."

# Check if Python is available for HTTP server
if command -v python3 &> /dev/null; then
    echo "Starting HTTP server on http://localhost:8000"
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    echo "Starting HTTP server on http://localhost:8000"
    python -m SimpleHTTPServer 8000
else
    echo "Python not found. Please install Python to run the server."
    exit 1
fi

echo "Application is running. Open http://localhost:8000 in your browser."

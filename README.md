# Cesium 3D Model Viewer

A Cesium-based 3D visualization application with an interactive dropdown menu for loading and viewing different 3D models.

## Setup

1. Ensure you have a valid Cesium Ion access token in `config.json`:
```json
{
  "cesium": "your_cesium_ion_access_token_here"
}
```

2. Build the application:
```bash
node build-sandcastle.js
```

This will generate `sandcastle.html` with your access token embedded from `config.json`.

## Usage

Due to CORS restrictions, you cannot open `sandcastle.html` directly in the browser. You need to serve it through a local web server.

### Quick Start (Recommended)
```bash
./start.sh
```
This script will:
- Stop any existing process on port 7999
- Build the application with your token
- Start a Python HTTP server on port 7999
- Open http://localhost:7999/sandcastle.html

### Manual Options

#### Option 1: Python (if installed)
```bash
# Build first
node build-sandcastle.js

# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### Option 2: Node.js (if installed)
```bash
# Build first
node build-sandcastle.js

# Install a simple server globally
npm install -g http-server

# Run the server
http-server
```

#### Option 3: Live Server (VS Code extension)
If using VS Code, install the "Live Server" extension and right-click on `sandcastle.html` → "Open with Live Server"

Then navigate to the appropriate URL and use the dropdown menu to select different 3D models.

## Available Models

- F-35 Lightning II Fighter
- J-20 Fighter
- Instanced Box (sample model)

## Files

- `sandcastle-template.html` - Template file with placeholder for access token
- `build-sandcastle.js` - Build script that generates the final HTML file
- `sandcastle.html` - Generated output file (do not edit directly)
- `config.json` - Configuration file containing your Cesium Ion access token
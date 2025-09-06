#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Read config.json
const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));

// Read sandcastle template
const template = fs.readFileSync('sandcastle-template.html', 'utf8');

// Replace placeholder with actual token
const output = template.replace('{{CESIUM_TOKEN}}', config.cesium);

// Write final sandcastle.html
fs.writeFileSync('sandcastle.html', output);

console.log('sandcastle.html generated successfully with token from config.json');
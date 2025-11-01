/**
 * Simple Development Server for SPA
 * Serves all routes through index.html
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 5005;

const mimeTypes = {
	'.html': 'text/html',
	'.js': 'text/javascript',
	'.css': 'text/css',
	'.json': 'application/json',
	'.png': 'image/png',
	'.jpg': 'image/jpg',
	'.gif': 'image/gif',
	'.svg': 'image/svg+xml',
	'.ico': 'image/x-icon',
	'.woff': 'font/woff',
	'.woff2': 'font/woff2',
	'.ttf': 'font/ttf',
	'.eot': 'application/vnd.ms-fontobject'
};

const server = http.createServer((req, res) => {
	console.log(`${req.method} ${req.url}`);
	
	// Parse URL
	let filePath = '.' + req.url;
	if (filePath === './') {
		filePath = './index.html';
	}
	
	// Get file extension
	const extname = String(path.extname(filePath)).toLowerCase();
	const contentType = mimeTypes[extname] || 'application/octet-stream';
	
	// Try to read the file
	fs.readFile(filePath, (error, content) => {
		if (error) {
			// If file not found and it's not a static file request, serve index.html (SPA routing)
			if (error.code === 'ENOENT' && !extname) {
				fs.readFile('./index.html', (error, content) => {
					if (error) {
						res.writeHead(500);
						res.end('Error loading index.html: ' + error.code);
					} else {
						res.writeHead(200, { 'Content-Type': 'text/html' });
						res.end(content, 'utf-8');
					}
				});
			} else {
				// Other errors or missing static files
				res.writeHead(error.code === 'ENOENT' ? 404 : 500);
				res.end('File not found: ' + filePath);
			}
		} else {
			// Success - serve the file
			res.writeHead(200, { 'Content-Type': contentType });
			res.end(content, 'utf-8');
		}
	});
});

server.listen(PORT, () => {
	console.log(`🚀 Server running at http://127.0.0.1:${PORT}/`);
	console.log(`📱 SPA routing enabled - all routes serve index.html`);
	console.log(`Press Ctrl+C to stop`);
});

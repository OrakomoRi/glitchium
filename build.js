const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

/**
 * Generates MD5 hash for a file
 * @param {string} filePath - Path to the file to hash
 * @returns {string} First 8 characters of MD5 hash
 * @throws {Error} If file doesn't exist or can't be read
 */
function hashFile(filePath) {
	const content = fs.readFileSync(filePath);
	return crypto.createHash('md5').update(content).digest('hex').slice(0, 8);
}

/**
 * Processes all local CSS and JS files found in HTML
 * Finds asset references, generates hashes, creates copies, and updates HTML
 * @param {string} htmlPath - Path to the HTML file to process
 */
function processAssets(htmlPath) {
	let html = fs.readFileSync(htmlPath, 'utf8');

	// Find all CSS files in link tags
	const cssRegex = /<link[^>]+href=["']([^"']+\.css)["'][^>]*>/g;
	let match;

	while ((match = cssRegex.exec(html)) !== null) {
		const cssPath = match[1];

		// Skip external URLs (CDN, absolute paths)
		if (cssPath.startsWith('http') || cssPath.startsWith('//')) continue;

		if (fs.existsSync(cssPath)) {
			const hash = hashFile(cssPath);
			const dir = path.dirname(cssPath);
			const ext = path.extname(cssPath);
			const name = path.basename(cssPath, ext);
			const newPath = `${dir}/${name}.${hash}${ext}`;

			fs.copyFileSync(cssPath, newPath);
			// Escape special regex characters in path
			html = html.replace(new RegExp(cssPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), newPath);

			console.log(`✓ CSS hashed: ${newPath}`);
		}
	}

	// Find all JS files in script tags
	const jsRegex = /<script[^>]+src=["']([^"']+\.js)["'][^>]*>/g;

	while ((match = jsRegex.exec(html)) !== null) {
		const jsPath = match[1];

		// Skip external URLs (CDN, absolute paths)
		if (jsPath.startsWith('http') || jsPath.startsWith('//')) continue;

		if (fs.existsSync(jsPath)) {
			const hash = hashFile(jsPath);
			const dir = path.dirname(jsPath);
			const ext = path.extname(jsPath);
			const name = path.basename(jsPath, ext);
			const newPath = `${dir}/${name}.${hash}${ext}`;

			fs.copyFileSync(jsPath, newPath);
			// Escape special regex characters in path
			html = html.replace(new RegExp(jsPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), newPath);

			console.log(`✓ JS hashed: ${newPath}`);
		}
	}

	fs.writeFileSync(htmlPath, html);
}

// Execute build
processAssets('index.html');
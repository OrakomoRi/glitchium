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
 * Processes CSS file: creates hashed copy and updates HTML references
 * @param {string} cssPath - Path to the CSS file
 * @param {string} htmlPath - Path to the HTML file to update
 */
function processCss(cssPath, htmlPath) {
	if (fs.existsSync(cssPath)) {
		const hash = hashFile(cssPath);
		const newPath = `assets/css/styles.${hash}.css`;
		fs.copyFileSync(cssPath, newPath);

		let html = fs.readFileSync(htmlPath, 'utf8');
		html = html.replace(/styles\.css/g, `styles.${hash}.css`);
		fs.writeFileSync(htmlPath, html);

		console.log(`✓ CSS hashed: styles.${hash}.css`);
	}
}

/**
 * Processes JS file: creates hashed copy and updates HTML references
 * @param {string} jsPath - Path to the JS file
 * @param {string} htmlPath - Path to the HTML file to update
 */
function processJs(jsPath, htmlPath) {
	if (fs.existsSync(jsPath)) {
		const hash = hashFile(jsPath);
		const newPath = `js/main.${hash}.js`;
		fs.copyFileSync(jsPath, newPath);

		let html = fs.readFileSync(htmlPath, 'utf8');
		html = html.replace(/main\.js/g, `main.${hash}.js`);
		fs.writeFileSync(htmlPath, html);

		console.log(`✓ JS hashed: main.${hash}.js`);
	}
}

// Execute build
processCss('assets/css/styles.css', 'index.html');
processJs('js/main.js', 'index.html');
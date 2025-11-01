/**
 * Theme Module - Handles theme switching
 */

const THEME_KEY = 'glitchium-theme';
const THEME_DARK = 'dark';
const THEME_LIGHT = 'light';

export function initTheme() {
	const toggle = document.getElementById('themeToggle');
	if (!toggle) return;

	// Theme already applied in inline script, just sync body dataset
	const currentTheme = document.documentElement.getAttribute('data-theme') || THEME_DARK;
	document.body.dataset.theme = currentTheme;
	updateMetaThemeColor(currentTheme);
	updateHighlightTheme(currentTheme);

	// Toggle on click
	toggle.addEventListener('click', () => {
		const currentTheme = document.documentElement.getAttribute('data-theme');
		const newTheme = currentTheme === THEME_DARK ? THEME_LIGHT : THEME_DARK;
		setTheme(newTheme);
	});
}

function setTheme(theme) {
	document.documentElement.setAttribute('data-theme', theme);
	document.body.dataset.theme = theme;
	localStorage.setItem(THEME_KEY, theme);
	updateMetaThemeColor(theme);
	updateHighlightTheme(theme);
}

function updateHighlightTheme(theme) {
	const darkTheme = document.getElementById('highlight-theme-dark');
	const lightTheme = document.getElementById('highlight-theme-light');
	
	if (darkTheme && lightTheme) {
		if (theme === THEME_DARK) {
			darkTheme.disabled = false;
			lightTheme.disabled = true;
		} else {
			darkTheme.disabled = true;
			lightTheme.disabled = false;
		}
	}
}

function updateMetaThemeColor(theme) {
	const metaThemeColor = document.querySelector('meta[name="theme-color"]');
	if (metaThemeColor) {
		metaThemeColor.content = theme === THEME_DARK ? '#000000' : '#ffffff';
	}
}

/**
 * Main Application Entry Point
 * Initializes SPA router and the Glitchium library
 */

import { router, homeTemplate, playgroundTemplate, usageTemplate, docsTemplate, initHighlighting, initUsageHighlighting } from './modules/router.js';
import { notFoundTemplate, init404Glitch } from '../pages/404.js';
import { initTheme } from './modules/theme.js';
import { initHero } from './modules/hero.js';
import { initDemos } from './modules/demo.js';
import { initPlayground } from './modules/playground.js';
import { initCodeCopy } from './modules/code-copy.js';
import { initLogoGlitch } from './modules/logo-glitch.js';

// Global glitch instance
let glitch;

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
	// Check if Glitchium is available
	if (typeof Glitchium === 'undefined') {
		console.error('glitchium library not found!');
		return;
	}
	
	// Create glitch instance
	glitch = new Glitchium();
	
	// Initialize theme (always active)
	initTheme();
	
	// Initialize logo glitch (always active)
	initLogoGlitch(glitch);
	
	// Define routes
	const routes = {
		'/': {
			title: 'glitchium - Professional Glitch Effects',
			template: homeTemplate,
			showFooter: true,
			init: () => {
				initHero(glitch);
				initDemos(glitch);
			}
		},
		'/playground': {
			title: 'Playground - glitchium',
			template: playgroundTemplate,
			showFooter: false,
			init: () => {
				initPlayground(glitch);
			}
		},
		'/usage': {
			title: 'Usage - glitchium',
			template: usageTemplate,
			showFooter: true,
			init: () => {
				initCodeCopy();
				initUsageHighlighting();
			}
		},
		'/docs': {
			title: 'Documentation - glitchium',
			template: docsTemplate,
			showFooter: true,
			init: () => {
				// Initialize syntax highlighting for documentation
				initHighlighting();
			}
		},
		'/404': {
			title: '404 - Page Not Found - glitchium',
			template: notFoundTemplate,
			showFooter: true,
			init: () => {
				init404Glitch(glitch);
			}
		}
	};
	
	// Initialize router
	router.init(routes, '#app');
	
	console.log('⚡ glitchium SPA initialized');
});

// Handle page visibility to optimize performance
document.addEventListener('visibilitychange', () => {
	if (document.hidden) {
		console.log('Page hidden - glitch effects paused');
	} else {
		console.log('Page visible - glitch effects resumed');
	}
});

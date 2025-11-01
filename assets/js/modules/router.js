/**
 * SPA Router Module
 * Manages client-side routing and page navigation
 */

// Import page templates
import { homeTemplate } from '../../pages/home.js';
import { playgroundTemplate } from '../../pages/playground.js';
import { usageTemplate } from '../../pages/usage.js';
import { docsTemplate, initHighlighting } from '../../pages/docs.js';

// Export templates so they can be used in main.js
export { homeTemplate, playgroundTemplate, usageTemplate, docsTemplate, initHighlighting };

// Also export initUsageHighlighting
export { initUsageHighlighting } from '../../pages/usage.js';

class Router {
	constructor() {
		this.routes = {};
		this.currentRoute = null;
		this.contentContainer = null;
		
		// Bind methods
		this.navigate = this.navigate.bind(this);
		this.handlePopState = this.handlePopState.bind(this);
		this.handleLinkClick = this.handleLinkClick.bind(this);
	}
	
	/**
	 * Initialize router
	 * @param {Object} routes - Routes configuration
	 * @param {string} contentSelector - Selector for content container
	 */
	init(routes, contentSelector = '#app') {
		this.routes = routes;
		this.contentContainer = document.querySelector(contentSelector);
		
		if (!this.contentContainer) {
			console.error('Content container not found:', contentSelector);
			return;
		}
		
		// Set up event listeners
		window.addEventListener('popstate', this.handlePopState);
		document.addEventListener('click', this.handleLinkClick);
		
		// Load initial route
		const path = window.location.pathname;
		this.loadRoute(path, false);
		
		console.log('✨ Router initialized');
	}
	
	/**
	 * Register a route
	 * @param {string} path - Route path
	 * @param {Object} config - Route configuration
	 */
	register(path, config) {
		this.routes[path] = config;
	}
	
	/**
	 * Navigate to a route
	 * @param {string} path - Route path
	 * @param {boolean} pushState - Whether to push state to history
	 */
	navigate(path, pushState = true) {
		// Normalize path
		path = path === '' ? '/' : path;
		
		if (pushState) {
			window.history.pushState({}, '', path);
		}
		
		this.loadRoute(path, true);
	}
	
	/**
	 * Load a route
	 * @param {string} path - Route path
	 * @param {boolean} animate - Whether to animate transition
	 */
	async loadRoute(path, animate = false) {
		// Normalize path
		path = path === '' ? '/' : path;
		
		// Find matching route
		const route = this.routes[path] || this.routes['/404'] || this.routes['/'];
		
		if (!route) {
			console.error('No route found for:', path);
			return;
		}
		
		this.currentRoute = path;
		
		// Animate out if needed
		if (animate) {
			this.contentContainer.style.opacity = '0';
			await new Promise(resolve => setTimeout(resolve, 200));
		}
		
		// Load content
		if (typeof route.template === 'function') {
			this.contentContainer.innerHTML = route.template();
		} else {
			this.contentContainer.innerHTML = route.template;
		}
		
		// Update active navigation
		this.updateNavigation(path);
		
		// Update footer visibility
		this.updateFooter(route.showFooter !== false);
		
		// Call route's init function if exists
		if (route.init && typeof route.init === 'function') {
			route.init();
		}
		
		// Animate in
		if (animate) {
			this.contentContainer.style.opacity = '1';
		}
		
		// Scroll to top
		window.scrollTo({ top: 0, behavior: animate ? 'smooth' : 'auto' });
		
		// Update page title
		if (route.title) {
			document.title = route.title;
		}
		
		console.log('📄 Loaded route:', path);
	}
	
	/**
	 * Handle browser back/forward
	 */
	handlePopState() {
		const path = window.location.pathname;
		this.loadRoute(path, true);
	}
	
	/**
	 * Handle link clicks
	 * @param {Event} e - Click event
	 */
	handleLinkClick(e) {
		// Find closest anchor tag
		const link = e.target.closest('a[href]');
		
		if (!link) return;
		
		const href = link.getAttribute('href');
		
		// Ignore external links, hash links, and download links
		if (
			!href ||
			href.startsWith('http') ||
			href.startsWith('#') ||
			link.hasAttribute('download') ||
			link.getAttribute('target') === '_blank'
		) {
			return;
		}
		
		// Check if it's an internal route
		if (this.routes[href]) {
			e.preventDefault();
			this.navigate(href);
		}
	}
	
	/**
	 * Update active navigation state
	 * @param {string} path - Current path
	 */
	updateNavigation(path) {
		const navLinks = document.querySelectorAll('.nav__link');
		
		navLinks.forEach(link => {
			const href = link.getAttribute('href');
			
			if (href === path || (path !== '/' && href === path)) {
				link.classList.add('nav__link--active');
			} else {
				link.classList.remove('nav__link--active');
			}
		});
	}
	
	/**
	 * Update footer visibility
	 * @param {boolean} show - Whether to show footer
	 */
	updateFooter(show) {
		const footer = document.querySelector('.footer');
		
		if (footer) {
			footer.style.display = show ? 'block' : 'none';
		}
		
		// Toggle body overflow for playground page
		if (!show && this.currentRoute === '/playground') {
			document.body.style.overflow = 'hidden';
			this.contentContainer.style.height = 'calc(100vh - var(--header-height, 80px))';
			this.contentContainer.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
			this.contentContainer.style.height = '';
			this.contentContainer.style.overflow = '';
		}
	}
	
	/**
	 * Get current route
	 * @returns {string} Current route path
	 */
	getCurrentRoute() {
		return this.currentRoute;
	}
	
	/**
	 * Destroy router and clean up
	 */
	destroy() {
		window.removeEventListener('popstate', this.handlePopState);
		document.removeEventListener('click', this.handleLinkClick);
	}
}

// Export singleton instance
export const router = new Router();

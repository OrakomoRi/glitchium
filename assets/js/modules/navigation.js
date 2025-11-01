/**
 * Navigation Module - Handles smooth scrolling and navigation
 */

export function initNavigation() {
	const navLinks = document.querySelectorAll('a[href^="#"]');
	
	navLinks.forEach(link => {
		link.addEventListener('click', (e) => {
			const href = link.getAttribute('href');
			
			// Skip if it's just "#"
			if (href === '#') return;
			
			const target = document.querySelector(href);
			
			if (target) {
				e.preventDefault();
				
				// Smooth scroll to target
				target.scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				});
				
				// Update URL without jumping
				history.pushState(null, '', href);
			}
		});
	});
}

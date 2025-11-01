/**
 * Demo Module - Handles demo section interactions
 */

export function initDemos(glitch) {
	const demoElements = document.querySelectorAll('.demo-target');
	
	demoElements.forEach(element => {
		const demoType = element.dataset.demo;
		
		// Get parent card as trigger if specified
		const triggerSelector = element.dataset.trigger;
		const triggerElement = triggerSelector ? element.closest(triggerSelector) : null;
		
		switch (demoType) {
			case 'hover':
				glitch.glitch(element, {
					playMode: 'hover',
					trigger: triggerElement,
					intensity: 0.8,
					layers: 6,
					fps: 20
				});
				break;
			
			case 'click':
				glitch.glitch(element, {
					playMode: 'click',
					trigger: triggerElement,
					intensity: 0.9,
					layers: 7,
					fps: 25
				});
				break;
			
			case 'always':
				glitch.glitch(element, {
					playMode: 'always',
					intensity: 0.6,
					layers: 5,
					fps: 15
				});
				break;
		}
	});
}

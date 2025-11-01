/**
 * Logo Glitch Module - Handles periodic glitch effect on logo icon
 */

export function initLogoGlitch(glitch) {
	const logoIcon = document.getElementById('logoIcon');
	if (!logoIcon) return;

	// Create a wrapper for the logo icon to apply glitch
	const wrapper = document.createElement('div');
	wrapper.style.display = 'inline-block';
	wrapper.style.width = '32px';
	wrapper.style.height = '32px';
	
	logoIcon.parentElement.insertBefore(wrapper, logoIcon);
	wrapper.appendChild(logoIcon);

	// Apply glitch effect with always-on periodic cycle
	const control = glitch.glitch(wrapper, {
		playMode: 'manual',
		intensity: 0.8,
		fps: 30,
		layers: 4,
		shake: true,
		shakeIntensity: 0.2,
		filters: true,
		pulse: true,
		smoothTransitions: false,
		createContainers: true,
		hideOverflow: false
	});

	// Random glitch cycle: pause 1-3s, glitch 0.4-1.5s
	function randomGlitchCycle() {
		// Random pause duration: 1000-3000ms
		const pauseDuration = 1000 + Math.random() * 2000;
		
		setTimeout(() => {
			// Start glitching
			control.start();

			// Random glitch duration: 400-1200ms
			const glitchDuration = 400 + Math.random() * 800;
			
			setTimeout(() => {
				control.stop();
				// Continue the cycle
				randomGlitchCycle();
			}, glitchDuration);
		}, pauseDuration);
	}

	// Start the cycle immediately
	randomGlitchCycle();
}

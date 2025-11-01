/**
 * Hero Module - Initializes hero section effects
 */

export function initHero(glitch) {
	const heroGlitchElement = document.querySelector('[data-glitch="true"]');
	
	if (!heroGlitchElement) return;
	
	// Apply subtle glitch effect to hero title
	glitch.glitch(heroGlitchElement, {
		playMode: 'always',
		intensity: 0.5,
		layers: 4,
		fps: 12,
		shake: true,
		shakeIntensity: 0.1,
		filters: false
	});
}

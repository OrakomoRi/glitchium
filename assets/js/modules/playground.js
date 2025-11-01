/**
 * Playground Module - Handles interactive customization playground
 */

export function initPlayground(glitch) {
	const target = document.getElementById('playgroundTarget');
	const intensityInput = document.getElementById('intensity');
	const layersInput = document.getElementById('layers');
	const fpsInput = document.getElementById('fps');
	const smoothTransitionsCheckbox = document.getElementById('smoothTransitions');
	const glitchFrequencyInput = document.getElementById('glitchFrequency');
	const glitchFrequencyControl = document.getElementById('glitchFrequencyControl');
	const shakeCheckbox = document.getElementById('shake');
	const filtersCheckbox = document.getElementById('filters');
	const pulseCheckbox = document.getElementById('pulse');
	const glitchTimeSpanCheckbox = document.getElementById('glitchTimeSpanEnable');
	const glitchTimeSpanStart = document.getElementById('glitchTimeSpanStart');
	const glitchTimeSpanEnd = document.getElementById('glitchTimeSpanEnd');
	const glitchTimeSpanControl = document.getElementById('glitchTimeSpanControl');
	const sliceMinHeight = document.getElementById('sliceMinHeight');
	const sliceMaxHeight = document.getElementById('sliceMaxHeight');
	const sliceHueRotate = document.getElementById('sliceHueRotate');
	
	if (!target) return;
	
	let currentControl = null;
	
	// Function to update glitch with current settings
	function updateGlitch() {
		const config = {
			playMode: 'always',
			intensity: parseFloat(intensityInput.value),
			layers: parseInt(layersInput.value),
			fps: parseInt(fpsInput.value),
			smoothTransitions: smoothTransitionsCheckbox.checked,
			glitchFrequency: parseInt(glitchFrequencyInput.value),
			shake: shakeCheckbox.checked,
			filters: filtersCheckbox.checked,
			pulse: pulseCheckbox.checked,
			shakeIntensity: 0.15,
			slice: {
				minHeight: parseFloat(sliceMinHeight.value),
				maxHeight: parseFloat(sliceMaxHeight.value),
				hueRotate: sliceHueRotate.checked
			}
		};
		
		// Add glitchTimeSpan if enabled
		if (glitchTimeSpanCheckbox.checked) {
			config.glitchTimeSpan = {
				start: parseFloat(glitchTimeSpanStart.value),
				end: parseFloat(glitchTimeSpanEnd.value)
			};
		}
		
		// Destroy previous instance
		if (currentControl) {
			currentControl.destroy();
		}
		
		// Create new instance
		currentControl = glitch.glitch(target, config);
	}
	
	// Update value displays
	function updateValueDisplay(input) {
		const valueDisplay = input.parentElement.querySelector('.control__value');
		if (valueDisplay) {
			valueDisplay.textContent = input.value;
		}
	}
	
	// Toggle glitch frequency control based on smooth transitions
	function toggleGlitchFrequency() {
		const isEnabled = smoothTransitionsCheckbox.checked;
		glitchFrequencyInput.disabled = !isEnabled;
		glitchFrequencyControl.style.opacity = isEnabled ? '1' : '0.5';
		glitchFrequencyControl.style.pointerEvents = isEnabled ? 'auto' : 'none';
	}
	
	// Toggle glitchTimeSpan controls
	function toggleGlitchTimeSpan() {
		const isEnabled = glitchTimeSpanCheckbox.checked;
		const controlEnd = document.getElementById('glitchTimeSpanControlEnd');
		glitchTimeSpanStart.disabled = !isEnabled;
		glitchTimeSpanEnd.disabled = !isEnabled;
		glitchTimeSpanControl.style.opacity = isEnabled ? '1' : '0.5';
		glitchTimeSpanControl.style.pointerEvents = isEnabled ? 'auto' : 'none';
		if (controlEnd) {
			controlEnd.style.opacity = isEnabled ? '1' : '0.5';
			controlEnd.style.pointerEvents = isEnabled ? 'auto' : 'none';
		}
	}
	
	// Add event listeners
	intensityInput.addEventListener('input', (e) => {
		updateValueDisplay(e.target);
		updateGlitch();
	});
	
	layersInput.addEventListener('input', (e) => {
		updateValueDisplay(e.target);
		updateGlitch();
	});
	
	fpsInput.addEventListener('input', (e) => {
		updateValueDisplay(e.target);
		updateGlitch();
	});
	
	smoothTransitionsCheckbox.addEventListener('change', () => {
		toggleGlitchFrequency();
		updateGlitch();
	});
	
	glitchFrequencyInput.addEventListener('input', (e) => {
		updateValueDisplay(e.target);
		updateGlitch();
	});
	
	pulseCheckbox.addEventListener('change', updateGlitch);
	
	glitchTimeSpanCheckbox.addEventListener('change', () => {
		toggleGlitchTimeSpan();
		updateGlitch();
	});
	
	glitchTimeSpanStart.addEventListener('input', (e) => {
		updateValueDisplay(e.target);
		updateGlitch();
	});
	
	glitchTimeSpanEnd.addEventListener('input', (e) => {
		updateValueDisplay(e.target);
		updateGlitch();
	});
	
	sliceMinHeight.addEventListener('input', (e) => {
		updateValueDisplay(e.target);
		updateGlitch();
	});
	
	sliceMaxHeight.addEventListener('input', (e) => {
		updateValueDisplay(e.target);
		updateGlitch();
	});
	
	sliceHueRotate.addEventListener('change', updateGlitch);
	shakeCheckbox.addEventListener('change', updateGlitch);
	filtersCheckbox.addEventListener('change', updateGlitch);
	
	// Initialize
	toggleGlitchFrequency();
	toggleGlitchTimeSpan();
	updateGlitch();
}

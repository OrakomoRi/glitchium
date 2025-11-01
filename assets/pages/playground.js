/**
 * Playground Page Template
 */
export function playgroundTemplate() {
	return `
		<section class="playground-fullscreen">
			<div class="playground-fullscreen__controls">
				<div class="playground-fullscreen__controls-inner">
					<h3 class="playground-fullscreen__title">Customization</h3>
					
					<div class="control">
						<label for="intensity" class="control__label">Intensity</label>
						<input type="range" id="intensity" class="control__input" min="0" max="1" step="0.1" value="0.7">
						<span class="control__value">0.7</span>
					</div>
					<div class="control">
						<label for="layers" class="control__label">Layers</label>
						<input type="range" id="layers" class="control__input" min="1" max="10" step="1" value="5">
						<span class="control__value">5</span>
					</div>
					<div class="control">
						<label for="fps" class="control__label">FPS</label>
						<input type="range" id="fps" class="control__input" min="5" max="60" step="5" value="15">
						<span class="control__value">15</span>
					</div>
					<div class="control control--checkbox">
						<input type="checkbox" id="smoothTransitions" class="control__checkbox">
						<label for="smoothTransitions" class="control__label">Smooth Transitions</label>
					</div>
					<div class="control" id="glitchFrequencyControl" style="opacity: 0.5; pointer-events: none;">
						<label for="glitchFrequency" class="control__label">Glitch Frequency</label>
						<input type="range" id="glitchFrequency" class="control__input" min="1" max="30" step="1" value="10" disabled>
						<span class="control__value">10</span>
					</div>
					<div class="control control--checkbox">
						<input type="checkbox" id="pulse" class="control__checkbox">
						<label for="pulse" class="control__label">Pulse Effect</label>
					</div>
					<div class="control control--checkbox">
						<input type="checkbox" id="glitchTimeSpanEnable" class="control__checkbox">
						<label for="glitchTimeSpanEnable" class="control__label">Time-based Glitch</label>
					</div>
					<div class="control" id="glitchTimeSpanControl" style="opacity: 0.5; pointer-events: none;">
						<label for="glitchTimeSpanStart" class="control__label">Glitch Start</label>
						<input type="range" id="glitchTimeSpanStart" class="control__input" min="0" max="1" step="0.05" value="0.25" disabled>
						<span class="control__value">0.25</span>
					</div>
					<div class="control" id="glitchTimeSpanControlEnd" style="opacity: 0.5; pointer-events: none;">
						<label for="glitchTimeSpanEnd" class="control__label">Glitch End</label>
						<input type="range" id="glitchTimeSpanEnd" class="control__input" min="0" max="1" step="0.05" value="0.75" disabled>
						<span class="control__value">0.75</span>
					</div>
					<div class="control">
						<label for="sliceMinHeight" class="control__label">Slice Min Height</label>
						<input type="range" id="sliceMinHeight" class="control__input" min="0.01" max="0.2" step="0.01" value="0.02">
						<span class="control__value">0.02</span>
					</div>
					<div class="control">
						<label for="sliceMaxHeight" class="control__label">Slice Max Height</label>
						<input type="range" id="sliceMaxHeight" class="control__input" min="0.1" max="0.5" step="0.05" value="0.2">
						<span class="control__value">0.2</span>
					</div>
					<div class="control control--checkbox">
						<input type="checkbox" id="sliceHueRotate" class="control__checkbox" checked>
						<label for="sliceHueRotate" class="control__label">Hue Rotation</label>
					</div>
					<div class="control control--checkbox">
						<input type="checkbox" id="shake" class="control__checkbox" checked>
						<label for="shake" class="control__label">Shake Effect</label>
					</div>
					<div class="control control--checkbox">
						<input type="checkbox" id="filters" class="control__checkbox" checked>
						<label for="filters" class="control__label">Color Filters</label>
					</div>
				</div>
			</div>
			
			<div class="playground-fullscreen__preview">
				<div class="playground-fullscreen__target" id="playgroundTarget">
					<h2>Custom Glitch</h2>
					<p>Adjust parameters to customize</p>
				</div>
			</div>
		</section>
	`;
}

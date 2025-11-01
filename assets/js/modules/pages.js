/**
 * Page Templates
 * Contains HTML templates for all pages
 */

/**
 * Home Page Template
 */
export function homeTemplate() {
	return `
		<!-- Hero Section -->
		<section class="hero">
			<div class="container">
				<div class="hero__content">
					<h1 class="hero__title">
						<span class="hero__title-line">Professional</span>
						<span class="hero__title-line hero__title-line--glitch" data-glitch="true">Glitch Effects</span>
						<span class="hero__title-line">For Production</span>
					</h1>
					<p class="hero__description">
						High-performance JavaScript library for randomized glitch effects. 
						Zero dependencies, GPU-accelerated, production-ready.
					</p>
					<div class="hero__actions">
						<a href="/playground" class="btn btn--primary btn--large">
							<ion-icon name="play-outline"></ion-icon>
							Try Playground
						</a>
						<a href="dist/glitchium.min.js" download class="btn btn--secondary btn--large">
							<ion-icon name="download-outline"></ion-icon>
							Download
						</a>
					</div>
					<div class="hero__stats">
						<div class="stat">
							<ion-icon name="flash-outline"></ion-icon>
							<div class="stat__value">&lt;3KB</div>
							<div class="stat__label">Minified</div>
						</div>
						<div class="stat">
							<ion-icon name="cube-outline"></ion-icon>
							<div class="stat__value">Zero</div>
							<div class="stat__label">Dependencies</div>
						</div>
						<div class="stat">
							<ion-icon name="speedometer-outline"></ion-icon>
							<div class="stat__value">60fps</div>
							<div class="stat__label">Performance</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Introduction Section -->
		<section id="introduction" class="introduction">
			<div class="container">
				<div class="introduction__content">
					<h2 class="introduction__title">About</h2>
					<div class="introduction__text">
						<p class="introduction__description">
							glitchium is a lightweight, standalone JavaScript library designed for creating sophisticated 
							glitch effects on web elements. Built with performance and flexibility in mind, it provides 
							a comprehensive API for implementing visually striking animations without compromising page speed.
						</p>
						<p class="introduction__description">
							The library leverages pure CSS transforms and hardware acceleration to deliver smooth, 
							60fps animations while maintaining a minimal footprint of less than 3KB minified and gzipped. 
							With zero external dependencies, glitchium integrates seamlessly into any project, from simple 
							websites to complex web applications.
						</p>
						<p class="introduction__description">
							Whether you need hover effects, click-triggered animations, or continuous background glitches, 
							glitchium provides precise control over intensity, timing, and visual parameters through an 
							intuitive configuration system.
						</p>
						<p class="introduction__description">
							This project is inspired by <a href="https://github.com/7PH/powerglitch" target="_blank" rel="noopener noreferrer" class="introduction__powerglitch-link"><img src="assets/images/powerglitch-logo.svg" alt="PowerGlitch" class="introduction__powerglitch-logo">PowerGlitch<ion-icon name="arrow-forward-outline"></ion-icon></a>, 
							offering a similar approach with enhanced customization options and optimized performance.
						</p>
					</div>
				</div>
			</div>
		</section>

		<!-- Demo Section -->
		<section id="demo" class="demo">
			<div class="container">
				<h2 class="section__title">Demo</h2>
				<p class="section__subtitle">Hover over the elements to see the glitch effects in action</p>
				
				<div class="demo__grid">
					<div class="demo-card">
						<div class="demo-card__content">
							<h3 class="demo-card__title demo-target" data-demo="hover" data-trigger=".demo-card">Hover Effect</h3>
							<p class="demo-card__description">Glitch appears when you hover the card</p>
						</div>
					</div>
					<div class="demo-card">
						<div class="demo-card__content">
							<h3 class="demo-card__title demo-target" data-demo="click" data-trigger=".demo-card">Click Effect</h3>
							<p class="demo-card__description">Click the card to trigger the glitch</p>
						</div>
					</div>
					<div class="demo-card">
						<div class="demo-card__content">
							<h3 class="demo-card__title demo-target" data-demo="always">Always On</h3>
							<p class="demo-card__description">Continuous glitch effect</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Download Section -->
		<section id="download" class="download">
			<div class="container">
				<div class="download__content">
					<h2 class="download__title">Production Ready</h2>
					<p class="download__description">
						Download glitchium and integrate professional glitch effects into your project.
					</p>
					<div class="download__actions">
						<a href="dist/glitchium.min.js" download class="btn btn--primary btn--large">
							<ion-icon name="download-outline"></ion-icon>
							Download Library
						</a>
					</div>
				</div>
			</div>
		</section>
	`;
}

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

/**
 * Usage Page Template
 */
export function usageTemplate() {
	return `
		<section class="usage">
			<div class="container">
				<h2 class="section__title">Quick Start</h2>
				<div class="usage__content">
					<div class="code-block">
						<div class="code-block__header">
							<span class="code-block__title">Installation</span>
							<button class="code-block__copy" data-copy="install">Copy</button>
						</div>
						<pre class="code-block__content"><code class="language-html" id="code-install">&lt;script src="glitchium.min.js"&gt;&lt;/script&gt;</code></pre>
					</div>

					<div class="code-block">
						<div class="code-block__header">
							<span class="code-block__title">Basic Usage</span>
							<button class="code-block__copy" data-copy="basic">Copy</button>
						</div>
						<pre class="code-block__content"><code class="language-javascript" id="code-basic">const glitch = new Glitchium();

// Simple usage
glitch.glitch('.my-element');

// With options
glitch.glitch('.my-element', {
  playMode: 'hover',
  intensity: 0.8,
  layers: 7
});</code></pre>
					</div>

					<div class="code-block">
						<div class="code-block__header">
							<span class="code-block__title">Advanced Control</span>
							<button class="code-block__copy" data-copy="advanced">Copy</button>
						</div>
						<pre class="code-block__content"><code class="language-javascript" id="code-advanced">const glitch = new Glitchium();

const control = glitch.glitch('.element', {
  playMode: 'manual',
  intensity: 0.9,
  fps: 20,
  layers: 8,
  filters: true
});

// Manual control
control.start();
setTimeout(() => control.stop(), 3000);</code></pre>
					</div>

					<div class="code-block">
						<div class="code-block__header">
							<span class="code-block__title">Smooth Transitions</span>
							<button class="code-block__copy" data-copy="smooth">Copy</button>
						</div>
						<pre class="code-block__content"><code class="language-javascript" id="code-smooth">const glitch = new Glitchium();

// Cinematic smooth glitch
glitch.glitch('.hero-title', {
  fps: 60,                  // High framerate for smooth render
  smoothTransitions: true,  // Enable interpolation
  glitchFrequency: 8,       // 8 new states per second
  intensity: 0.7
});

// Slow dramatic glitch
glitch.glitch('.dramatic', {
  fps: 30,
  smoothTransitions: true,
  glitchFrequency: 3,       // Slow transitions
  intensity: 0.5
});</code></pre>
					</div>

					<div class="code-block">
						<div class="code-block__header">
							<span class="code-block__title">Advanced Features</span>
							<button class="code-block__copy" data-copy="advanced-features">Copy</button>
						</div>
						<pre class="code-block__content"><code class="language-javascript" id="code-advanced-features">const glitch = new Glitchium();

// Pulse effect with time-based glitch
glitch.glitch('.element', {
  pulse: true,
  glitchTimeSpan: { start: 0.2, end: 0.8 },
  intensity: 0.8
});

// Custom slice configuration
glitch.glitch('.element', {
  slice: {
    minHeight: 0.05,
    maxHeight: 0.3,
    hueRotate: false
  },
  intensity: 0.7
});</code></pre>
					</div>
				</div>
			</div>
		</section>
	`;
}

/**
 * Docs (API) Page Template
 */
export function docsTemplate() {
	return `
		<section class="api">
			<div class="container">
				<h2 class="section__title">Documentation</h2>
				<p class="section__subtitle">Complete API reference and detailed guide</p>
				
				<div class="api__content">
					<!-- Getting Started -->
					<article class="api-section">
						<h3 class="api-section__title">🚀 Getting Started</h3>
						<p class="api-method__description">
							To use glitchium, first include the library in your HTML file, then create an instance and apply glitch effects to your elements.
						</p>
						<div class="code-block">
							<pre class="code-block__content"><code class="language-html">&lt;script src="glitchium.min.js"&gt;&lt;/script&gt;
&lt;script&gt;
  const glitch = new Glitchium();
  glitch.glitch('.my-element');
&lt;/script&gt;</code></pre>
						</div>
					</article>

					<!-- Constructor -->
					<article class="api-section">
						<h3 class="api-section__title">🔧 Constructor</h3>
						<div class="api-method">
							<code class="api-method__signature">new Glitchium()</code>
							<p class="api-method__description">
								Creates a new instance of the glitchium library. You can create multiple instances if needed, 
								each managing its own set of glitch effects independently.
							</p>
							<div class="api-params">
								<h4 class="api-params__title">Example:</h4>
								<div class="code-block">
									<pre class="code-block__content"><code class="language-javascript">const glitch = new Glitchium();
// Now you can use glitch.glitch() to apply effects</code></pre>
								</div>
							</div>
						</div>
					</article>

					<!-- Methods -->
					<article class="api-section">
						<h3 class="api-section__title">📚 Methods</h3>
						
						<div class="api-method">
							<code class="api-method__signature">glitch(selector, options)</code>
							<p class="api-method__description">
								The main method to apply glitch effects to one or multiple elements. This method is highly configurable 
								and returns a control object for manual manipulation of the effect.
							</p>
							<div class="api-params">
								<h4 class="api-params__title">Parameters:</h4>
								<ul class="api-params__list">
									<li><code>selector</code> <span class="param-type">(string | HTMLElement | NodeList)</span> - Target element(s). Can be:
										<ul>
											<li>CSS selector string: <code>'.my-class'</code>, <code>'#my-id'</code></li>
											<li>HTMLElement: <code>document.querySelector('.element')</code></li>
											<li>NodeList: <code>document.querySelectorAll('.elements')</code></li>
										</ul>
									</li>
									<li><code>options</code> <span class="param-type">(object, optional)</span> - Configuration object with various settings (see Options section below)</li>
								</ul>
							</div>
							<div class="api-params">
								<h4 class="api-params__title">Returns:</h4>
								<p>Control object with the following methods:</p>
								<ul class="api-params__list">
									<li><code>start()</code> - Start or resume the glitch effect (useful with <code>playMode: 'manual'</code>)</li>
									<li><code>stop()</code> - Pause the glitch effect without destroying it</li>
									<li><code>destroy()</code> - Completely remove the glitch effect and clean up resources</li>
								</ul>
							</div>
							<div class="api-params">
								<h4 class="api-params__title">Examples:</h4>
								<div class="code-block">
									<pre class="code-block__content"><code class="language-javascript">// Simple usage
glitch.glitch('.title');

// With options
glitch.glitch('.hero', {
  playMode: 'hover',
  intensity: 0.8
});

// Manual control
const control = glitch.glitch('.element', { playMode: 'manual' });
control.start();
setTimeout(() => control.stop(), 3000);</code></pre>
								</div>
							</div>
						</div>

						<div class="api-method">
							<code class="api-method__signature">stopAll()</code>
							<p class="api-method__description">
								Stops all active glitch effects created by this instance. The effects are paused but not destroyed, 
								so they can be restarted if needed.
							</p>
							<div class="api-params">
								<h4 class="api-params__title">Example:</h4>
								<div class="code-block">
									<pre class="code-block__content"><code class="language-javascript">// Stop all effects when page is hidden
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    glitch.stopAll();
  }
});</code></pre>
								</div>
							</div>
						</div>

						<div class="api-method">
							<code class="api-method__signature">destroyAll()</code>
							<p class="api-method__description">
								Completely destroys all glitch effects created by this instance and cleans up all resources. 
								Use this when you're done with the effects and want to free up memory.
							</p>
							<div class="api-params">
								<h4 class="api-params__title">Example:</h4>
								<div class="code-block">
									<pre class="code-block__content"><code class="language-javascript">// Cleanup when leaving the page
window.addEventListener('beforeunload', () => {
  glitch.destroyAll();
});</code></pre>
								</div>
							</div>
						</div>
					</article>

					<article class="api-section">
						<h3 class="api-section__title">⚙️ Configuration Options</h3>
						<p class="api-method__description">
							All options are optional. Below is the complete list of available configuration parameters with their defaults and detailed explanations.
						</p>
						<table class="api-table">
							<thead>
								<tr>
									<th>Option</th>
									<th>Type</th>
									<th>Default</th>
									<th>Description</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td><code>playMode</code></td>
									<td>string</td>
									<td>'always'</td>
									<td>
										Controls when the glitch effect is active:<br>
										<strong>'always'</strong> - Continuous glitch<br>
										<strong>'hover'</strong> - Only on mouse hover<br>
										<strong>'click'</strong> - Triggered by click<br>
										<strong>'manual'</strong> - Controlled via start()/stop()
									</td>
								</tr>
								<tr>
									<td><code>intensity</code></td>
									<td>number</td>
									<td>0.7</td>
									<td>Overall strength of the glitch effect (0-1). Higher values create more dramatic distortions.</td>
								</tr>
								<tr>
									<td><code>fps</code></td>
									<td>number</td>
									<td>15</td>
									<td>Rendering frame rate (5-60). Higher values = smoother but more resource-intensive. Use 60 with smoothTransitions for cinema-quality effects.</td>
								</tr>
								<tr>
									<td><code>layers</code></td>
									<td>number</td>
									<td>5</td>
									<td>Number of horizontal slices (1-10). More layers = more complex glitch pattern.</td>
								</tr>
								<tr>
									<td><code>smoothTransitions</code></td>
									<td>boolean</td>
									<td>false</td>
									<td>Enable smooth interpolation between glitch states. Creates cinematic, flowing effects instead of sudden jumps. Works with glitchFrequency.</td>
								</tr>
								<tr>
									<td><code>glitchFrequency</code></td>
									<td>number</td>
									<td>10</td>
									<td>How many new glitch states per second (1-30). Only used when smoothTransitions is enabled. Lower = slower, more dramatic transitions.</td>
								</tr>
								<tr>
									<td><code>pulse</code></td>
									<td>boolean</td>
									<td>false</td>
									<td>Adds a subtle breathing/pulsing scale animation to the element, creating a more dynamic effect.</td>
								</tr>
								<tr>
									<td><code>glitchTimeSpan</code></td>
									<td>object | false</td>
									<td>false</td>
									<td>
										Limits glitch to specific time range during animation cycle:<br>
										<code>{start: 0.25, end: 0.75}</code><br>
										Values are 0-1, where 0 = start of cycle, 1 = end. Useful for precise timing control.
									</td>
								</tr>
								<tr>
									<td><code>slice.minHeight</code></td>
									<td>number</td>
									<td>0.02</td>
									<td>Minimum height of glitch slices as fraction of element height (0-1). Smaller = thinner slices.</td>
								</tr>
								<tr>
									<td><code>slice.maxHeight</code></td>
									<td>number</td>
									<td>0.2</td>
									<td>Maximum height of glitch slices as fraction of element height (0-1). Larger = thicker slices.</td>
								</tr>
								<tr>
									<td><code>slice.hueRotate</code></td>
									<td>boolean</td>
									<td>true</td>
									<td>Apply color shifts (hue rotation) to slices. Disable for monochrome glitch effects.</td>
								</tr>
								<tr>
									<td><code>shake</code></td>
									<td>boolean</td>
									<td>true</td>
									<td>Enable random position shifting/shaking of the element. Creates more chaotic, energetic effects.</td>
								</tr>
								<tr>
									<td><code>shakeIntensity</code></td>
									<td>number</td>
									<td>0.15</td>
									<td>Strength of the shake effect (0-1). Higher values = more dramatic position shifts.</td>
								</tr>
								<tr>
									<td><code>filters</code></td>
									<td>boolean</td>
									<td>true</td>
									<td>Apply color channel separation and distortion filters. Disable for pure geometry-based glitches.</td>
								</tr>
								<tr>
									<td><code>trigger</code></td>
									<td>string | Element</td>
									<td>null</td>
									<td>
										Specify a different element as trigger for hover/click modes:<br>
										<code>trigger: '.parent-element'</code><br>
										Useful when you want to trigger glitch on one element by interacting with another.
									</td>
								</tr>
								<tr>
									<td><code>hideOverflow</code></td>
									<td>boolean</td>
									<td>false</td>
									<td>Apply <code>overflow: hidden</code> to prevent glitch from extending beyond element boundaries.</td>
								</tr>
								<tr>
									<td><code>createContainers</code></td>
									<td>boolean</td>
									<td>true</td>
									<td>Automatically wrap elements in containers needed for the effect. Set to false if you've pre-wrapped elements manually.</td>
								</tr>
								<tr>
									<td><code>optimizeSeo</code></td>
									<td>boolean</td>
									<td>true</td>
									<td>Use semantic HTML that's friendly to search engines and screen readers while maintaining visual effects.</td>
								</tr>
							</tbody>
						</table>
					</article>
				</div>
			</div>
		</section>
	`;
}

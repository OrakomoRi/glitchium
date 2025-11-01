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

/**
 * Initialize syntax highlighting for code blocks
 */
export function initHighlighting() {
	if (typeof hljs !== 'undefined') {
		// Highlight all code blocks
		document.querySelectorAll('pre code').forEach((block) => {
			hljs.highlightElement(block);
		});
	}
}

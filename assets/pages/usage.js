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
 * Initialize syntax highlighting for code blocks
 */
export function initUsageHighlighting() {
	if (typeof hljs !== 'undefined') {
		// Highlight all code blocks
		document.querySelectorAll('pre code').forEach((block) => {
			hljs.highlightElement(block);
		});
	}
}

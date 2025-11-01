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

/**
 * 404 Error Page Template
 */
export function notFoundTemplate() {
	return `
		<section class="error-page">
			<div class="container">
				<div class="error-page__content">
					<h1 class="error-page__code" data-glitch-404="true">404</h1>
					<h2 class="error-page__title">Page Not Found</h2>
					<p class="error-page__description">
						The page you're looking for doesn't exist or has been moved.
					</p>
					<div class="error-page__actions">
						<a href="/" class="btn btn--primary btn--large">
							<ion-icon name="home-outline"></ion-icon>
							Go Home
						</a>
						<a href="/docs" class="btn btn--secondary btn--large">
							<ion-icon name="book-outline"></ion-icon>
							Documentation
						</a>
					</div>
				</div>
			</div>
		</section>
	`;
}

/**
 * Initialize 404 page glitch effect
 */
export function init404Glitch(glitch) {
	const element = document.querySelector('[data-glitch-404]');
	if (element && glitch) {
		glitch.glitch(element, {
			playMode: 'always',
			intensity: 0.9,
			layers: 8,
			fps: 20,
			shake: true,
			filters: true
		});
	}
}

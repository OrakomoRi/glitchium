/**
 * Code Copy Module - Handles copy to clipboard functionality
 */

export function initCodeCopy() {
	const copyButtons = document.querySelectorAll('.code-block__copy');
	
	copyButtons.forEach(button => {
		button.addEventListener('click', async () => {
			const codeType = button.dataset.copy;
			const codeElement = document.getElementById(`code-${codeType}`);
			
			if (!codeElement) return;
			
			const code = codeElement.textContent;
			
			try {
				await navigator.clipboard.writeText(code);
				
				// Visual feedback
				const originalText = button.textContent;
				button.textContent = 'Copied!';
				button.style.color = 'var(--color-primary)';
				
				setTimeout(() => {
					button.textContent = originalText;
					button.style.color = '';
				}, 2000);
			} catch (err) {
				console.error('Failed to copy code:', err);
				button.textContent = 'Failed';
				
				setTimeout(() => {
					button.textContent = 'Copy';
				}, 2000);
			}
		});
	});
}

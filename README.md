# glitchium

> Lightweight JavaScript library for fully randomized glitch effects

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Size](https://img.shields.io/badge/size-<5KB-green.svg)](dist/glitchium.min.js)
[![Version](https://img.shields.io/badge/version-1.0.1-orange.svg)](CHANGELOG.md)

Professional, high-performance glitch effect library with zero dependencies. Create stunning visual distortions with full customization control.

**:star: Inspired by [powerglitch](https://github.com/7PH/powerglitch) - check it out!**

Check out the [showcase website](https://glitchium.vercel.app) for live demos and documentation.

## :sparkles: Features

- **Lightweight** - Under 3KB minified, no dependencies
- **High Performance** - GPU-accelerated, 60fps smooth animations
- **Fully Randomized** - Unique glitch patterns every time
- **Highly Configurable** - Control every aspect of the effect
- **Smooth Transitions** - Optional interpolation for cinematic effects
- **Flexible Triggers** - Hover, click, always-on, or manual control
- **Universal** - Works in all modern browsers, vanilla JS

## :rocket: Quick Start

### Installation

#### Direct Download

Download the latest `glitchium.min.js` from the [dist folder](dist/) and include it in your HTML:

```html
<script src="glitchium.min.js"></script>
```

#### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/glitchium@1.0.1/dist/glitchium.min.js"></script>
```

### Basic Usage

```javascript
const glitch = new Glitchium();

// Simple usage - apply to any element
glitch.glitch('.my-element');

// Trigger on hover
glitch.glitch('.my-element', {
  playMode: 'hover',
  intensity: 0.8
});

// Advanced configuration
const control = glitch.glitch('.title', {
  playMode: 'manual',
  intensity: 0.9,
  fps: 30,
  layers: 8,
  smoothTransitions: true,
  glitchFrequency: 12
});

// Manual control
control.start();
setTimeout(() => control.stop(), 3000);
```

## :globe_with_meridians: Showcase Website

The project includes a full-featured SPA showcase website demonstrating all features, with live interactive demos, a customization playground, and complete API documentation.

### Running Locally

```bash
# Using Node.js server (recommended for SPA routing)
node server.js

# Python (note: direct URLs like /usage won't work without server config)
python -m http.server 8000

# Node.js
npx serve

# VS Code Live Server (may need SPA configuration)
# Right-click index.html → Open with Live Server
```

Then open `http://localhost:5005` (Node.js) or `http://localhost:8000` (Python) in your browser.

### Deploying to Vercel

The project includes `vercel.json` for seamless deployment:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repository at [vercel.com](https://vercel.com) for automatic deployments.

## :raised_hands: Acknowledgments

- Inspired by [powerglitch](https://github.com/7PH/powerglitch) by 7PH

## :handshake: Contributing

Contributions, issues, and feature requests are welcome!

## :link: Links

- [Documentation](https://glitchium.vercel.app/docs)
- [Issues](https://github.com/OrakomoRi/glitchium/issues)
- [Changelog](CHANGELOG.md)
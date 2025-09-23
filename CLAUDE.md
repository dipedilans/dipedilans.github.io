# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a multi-page portfolio website for Diogo Silva built with vanilla HTML, CSS, and JavaScript (ES6+ modules). The project follows the specifications in PRD.md and uses a clean, modern blue color palette with light/dark theme support.

## Architecture & Structure

### Technology Stack
- **Frontend Only**: Pure HTML5, CSS3, JavaScript (ES6 modules)
- **No Build Tools**: Direct browser execution, no compilation step
- **External Library**: EmailJS for contact form only
- **Assets**: Images at `/assets/images/`, CV at `/assets/docs/cv.pdf`

### Module Architecture
The JavaScript architecture uses ES6 modules with a main entry point that orchestrates initialization:
- `main.js` - Central coordinator that loads components and initializes features
- Each feature (navigation, theme, language, etc.) is a separate module
- Page-specific initialization based on current URL
- Dynamic header/footer injection via JavaScript templates

### CSS Organization
CSS is split into logical layers:
- `reset.css` - Normalize browser defaults
- `variables.css` - CSS custom properties for theming
- `base.css` - Global element styles
- `layout.css` - Structural components
- `components.css` - Reusable UI components
- `utilities.css` - Utility classes
- `animations.css` - Animation definitions
- `pages/*.css` - Page-specific styles

## Development Commands

### Local Development
Since this is a static site with no build process:
```bash
# Start a local server (using Python)
python3 -m http.server 8000

# Or using Node.js http-server (if installed)
npx http-server -p 8000

# Or using VS Code Live Server extension
# Right-click on index.html and select "Open with Live Server"
```

### Testing
No automated tests are configured. Manual testing required:
- Cross-browser compatibility (Chrome, Firefox, Safari, Edge)
- Mobile responsiveness (320px minimum width)
- Theme switching (light/dark modes)
- Language switching (PT/EN via translations.json)

### Deployment
The site is designed for static hosting:
- GitHub Pages: Push to main branch
- Netlify: Drag and drop the folder
- Any static file server

## Key Implementation Details

### Multi-language Support
- Translations stored in `/data/translations.json`
- Elements use `data-i18n` attributes for translation keys
- Language preference saved to localStorage
- Default language: Portuguese (pt)

### Theme System
- CSS variables define color schemes
- Theme preference saved to localStorage
- Respects system preference initially
- Smooth transitions between themes (300ms)

### Header Behavior
- Smart scroll: hides on scroll down, shows on scroll up
- Progress bar shows page scroll percentage
- Mobile menu with hamburger toggle
- Active page highlighting in navigation

### Page-specific Features
- **Homepage**: Hero with typewriter effect, skills grid, project cards, testimonials carousel
- **Projects**: Filterable project grid with category tags
- **Contact**: Form with EmailJS integration
- **About**: Timeline and personal story
- **Skills**: Categorized skill display with proficiency indicators

### Animation System
- Intersection Observer for scroll-triggered animations
- Counter animations for achievement numbers
- Smooth reveal animations with `.reveal` class
- Typewriter effect for hero section taglines

## Common Tasks

### Adding a New Project
1. If using dynamic loading, update the projects data structure in `projects.js`
2. Add project images to `/assets/images/`
3. Include proper tags for filtering functionality

### Updating Translations
Edit `/data/translations.json` with new key-value pairs for both `pt` and `en` languages

### Modifying Theme Colors
Update CSS variables in `variables.css`, particularly:
- Light theme: `:root` variables
- Dark theme: `[data-theme="dark"]` overrides
- Primary blue scale: `--primary-*` variables

### Contact Form Setup
The contact form uses EmailJS. To configure:
1. Set up EmailJS account and template
2. Update the service ID and template ID in `contact.js`
3. Test form submission thoroughly

## Important Files

- `PRD.md` - Complete product requirements and specifications
- `/data/translations.json` - All UI text translations
- `/assets/docs/cv.pdf` - Resume/CV file for download
- `/assets/images/profile.png` - Main profile image

## Code Conventions

- BEM naming for CSS classes (`.block__element--modifier`)
- Semantic HTML5 elements throughout
- Mobile-first responsive design
- CSS custom properties for all colors and spacing
- ES6+ JavaScript with modules
- Async/await for asynchronous operations
- Event delegation where appropriate
# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website project built with vanilla HTML, CSS, and JavaScript. The project follows a multi-page architecture without frameworks to focus on performance and fundamentals.

## Project Structure

```
/
├── index.html          (Homepage)
├── about.html          (About Me)
├── skills.html         (Skills & Technologies)
├── projects.html       (Portfolio)
├── resume.html         (CV/Resume)
├── contact.html        (Contact)
├── 404.html           (Error Page)
├── /assets
│   ├── /css           (Stylesheets)
│   ├── /js            (JavaScript modules)
│   ├── /images        (Images and media)
│   └── /docs          (CV/Resume PDFs)
└── /data
    ├── translations.json  (i18n content)
    └── projects.json      (Project data)
```

## Development Commands

Since this is a vanilla HTML/CSS/JS project without a build system yet:

```bash
# Start a local development server (if Python is installed)
python3 -m http.server 8000
# or
python -m SimpleHTTPServer 8000

# For live reload during development (if Node.js is available)
npx live-server

# No build/compile steps required - direct file editing
```

## Architecture & Key Components

### Global Components
- **Smart Header**: Auto-hide on scroll down, show on scroll up, with progress bar
- **Footer**: 3-column layout with brand, quick links, and social
- **Theme Switcher**: Light/dark mode with localStorage persistence
- **Language Toggle**: PT/EN support via translations.json

### CSS Architecture
- BEM naming convention
- CSS custom properties for theming
- Mobile-first responsive design
- Modular file structure (reset, variables, base, components, utilities, pages)

### JavaScript Modules
- `main.js` - App initialization
- `navigation.js` - Header behavior and menu
- `theme.js` - Dark/light mode switching
- `language.js` - i18n handling
- `animations.js` - Scroll animations and typewriter effects
- `projects.js` - Project filtering and search
- `contact.js` - Form validation and EmailJS integration
- `utils.js` - Helper functions

### Design System
- **Primary Color**: Blue theme (#2196f3 base)
- **Typography**: Inter font family
- **Spacing**: 4px base unit system
- **Breakpoints**: 768px (tablet), 1024px (desktop)

## Development Guidelines

1. **Simplicity First**: Keep solutions simple and avoid over-engineering
2. **Performance**: Optimize images, lazy load content, minimize CSS/JS
3. **Accessibility**: WCAG 2.1 Level AA compliance, semantic HTML, ARIA labels
4. **Progressive Enhancement**: Core functionality works without JavaScript
5. **Mobile-First**: Design for mobile, enhance for desktop
6. **Clean Commits**: Use conventional commit format (feat:, fix:, style:, etc.)

## Key Features to Implement

1. **Hero Section**: Typewriter effect with multi-language greeting
2. **Smooth Scroll**: Between sections with progress indicator
3. **Project Filtering**: Real-time search and category filters
4. **Contact Form**: EmailJS integration with validation
5. **Lazy Loading**: Images and below-fold content
6. **Scroll Animations**: Using Intersection Observer
7. **LocalStorage**: Save theme and language preferences

## Testing Checklist

- Cross-browser compatibility (Chrome, Firefox, Safari, Edge)
- Mobile responsiveness (320px to 2560px)
- Form validation and submission
- Theme switching persistence
- Performance (PageSpeed Insights > 90)
- Accessibility (keyboard navigation, screen readers)

## External Resources

- **EmailJS**: For contact form functionality
- **Google Fonts**: Inter font family
- **Images**: Use Unsplash/Pexels for placeholders
- **Icons**: Heroicons or Feather Icons

## Important Notes

- No package.json yet - project uses vanilla technologies
- CV/Resume PDF should be stored at `/assets/docs/cv.pdf`
- All content placeholders use Lorem Ipsum until real content is provided
- Follow the PRD.md for detailed specifications and implementation phases
# Green Voltage - Project Documentation

## Project Overview
Green Voltage is a landing page for an energy service company specializing in:
- Energy efficient lighting solutions
- Solar technology
- Automated light-on detection switches
- Smart energy management

## Tech Stack
- **Framework**: React 18 with Vite
- **Styling**: CSS Modules / Plain CSS
- **Build Tool**: Vite (lightweight, fast HMR)

## Project Structure
```
green-voltage/
├── public/           # Static assets
├── src/
│   ├── assets/       # Images, icons
│   ├── components/   # React components
│   ├── App.jsx       # Main app component
│   ├── App.css       # Global styles
│   ├── index.css     # Base styles
│   └── main.jsx      # Entry point
├── index.html        # HTML template
├── package.json      # Dependencies
└── vite.config.js    # Vite configuration
```

## General Practices
1. **Component Structure**: Use functional components with hooks
2. **Styling**: Keep styles modular, use CSS variables for theming
3. **Images**: Fetch from reliable CDN/web sources (Unsplash, Pexels)
4. **Performance**: Lazy load images, minimize bundle size
5. **Accessibility**: Use semantic HTML, proper alt tags

## Key Locations
- Components: `src/components/`
- Styles: `src/App.css`, `src/index.css`
- Main App: `src/App.jsx`

## Color Palette
- Primary Green: #22c55e (energy/eco theme)
- Dark Green: #166534
- Accent Yellow: #facc15 (solar/light)
- Dark Background: #0f172a
- Light Text: #f8fafc

## Commands
- `npm run dev` - Start development server
- `npm run build` - Production build
- `npm run preview` - Preview production build

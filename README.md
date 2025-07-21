# MARADONAvx Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern design with animated particle background
- 📱 Fully responsive layout
- ⚡ Fast performance with Next.js
- 🔒 Security headers and XSS protection
- 🎯 SEO optimized
- 💜 Purple/blue gradient theme
- 📧 Contact form with validation
- 🚀 Ready for Netlify deployment

## Quick Start

1. Download the project files
2. Install dependencies: `npm install`
3. Run development server: `npm run dev`
4. Open http://localhost:3000

## Deploy to Netlify

1. Download the project as ZIP
2. Extract the files
3. Open terminal in project folder
4. Run: `npm install && npm run build`
5. Drag the `out` folder to Netlify deploy area
6. Your site is live!

## Customization

- Update Discord link in all components
- Modify colors in `tailwind.config.js`
- Change content in component files
- Add your own images and projects

## Security Features

- XSS protection
- CSRF protection
- Security headers
- Input sanitization
- Rate limiting ready

Built with ❤️ by MARADONAvx
\`\`\`

```plaintext file=".gitignore"
# Dependencies
/node_modules
/.pnp
.pnp.js

# Testing
/coverage

# Next.js
/.next/
/out/

# Production
/build

# Misc
.DS_Store
*.pem

# Debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Local env files
.env*.local

# Vercel
.vercel

# TypeScript
*.tsbuildinfo
next-env.d.ts

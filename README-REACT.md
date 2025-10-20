# Portfolio - Dennis Sharon Cheruvathoor

A modern, professional portfolio built with React, featuring smooth animations and a clean design.

## Features

- ✨ **Smooth Animations**: Intersection Observer API for scroll-triggered animations
- 🎨 **Professional Design**: Clean, minimalist interface with attention to detail
- 📱 **Fully Responsive**: Optimized for all device sizes
- ⚡ **Performance Optimized**: Fast loading with React best practices
- 🎭 **Interactive Elements**: Magnetic buttons and hover effects
- 🌐 **Multi-language Preloader**: Greetings in 7 different languages

## Tech Stack

- **React 19** - Modern UI library
- **CSS3** - Custom animations and styling
- **Intersection Observer API** - Scroll animations
- **React Hooks** - State and lifecycle management

## Color Scheme

- Background: `#0f0f0f`
- Text: `#ffffff`
- Accent: `#ff3c00`
- Secondary: `#333333`
- Blue: `#5352ed`

## Typography

- Headings: **Della Respira**
- Body: **Hatton**

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Copy your images to the `public` folder:
- Boston.png
- BizzNex logo.png
- AviaOhr.png
- VOND.2.png
- Medstar.png
- Brand.webp

3. Copy your Hatton fonts to `public/fonts/`:
- Hatton-Regular.ttf
- Hatton-Bold.ttf

### Running the Application

```bash
npm start
```

The application will open at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
portfolio/
├── public/
│   ├── index.html
│   ├── fonts/
│   └── images/
├── src/
│   ├── components/
│   │   ├── Preloader.js
│   │   ├── Navigation.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Skills.js
│   │   ├── Projects.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── styles/
│   │   ├── index.css
│   │   ├── App.css
│   │   ├── Preloader.css
│   │   ├── Navigation.css
│   │   ├── Hero.css
│   │   ├── About.css
│   │   ├── Skills.css
│   │   ├── Projects.css
│   │   ├── Contact.css
│   │   └── Footer.css
│   ├── App.js
│   └── index.js
└── package.json
```

## Component Overview

### Preloader
- Multi-language greeting animation
- Smooth transition to main content
- Preserves your original design

### Navigation
- Fixed navigation with scroll effects
- Full-screen menu overlay
- Smooth scroll to sections

### Hero
- Large, impactful title
- Animated text entrance
- Scroll indicator

### About
- Two-column layout
- Fade-in animations
- Image hover effects

### Skills
- 40+ comprehensive technical skills
- Organized categories: Languages, Frontend, Backend, Cloud, ML, Design, Tools
- Infinite scrolling with smooth animations
- Category labels with accent styling
- Pause on hover for readability

### Projects
- Vertical showcase layout
- Image hover effects
- Magnetic view buttons
- Staggered animations

### Contact
- Magnetic button effects
- Gradient text effects
- Social media links with hover animations

## Customization

### Update Projects

Edit `src/components/Projects.js`:

```javascript
const projectsData = [
  {
    title: 'Your Project',
    category: 'Your Category',
    image: '/your-image.png',
    link: 'https://your-link.com'
  },
  // ... more projects
];
```

### Update Skills

Edit `src/components/Skills.js` to customize skill categories:

```javascript
// Programming Languages & Core Technologies
const coreSkills = ['JavaScript', 'TypeScript', 'Python', ...];

// Frontend Technologies
const frontendSkills = ['React.js', 'Vue.js', 'Next.js', ...];

// Backend Technologies
const backendSkills = ['Node.js', 'Express.js', 'Flask', ...];

// Cloud, DevOps & Databases
const cloudSkills = ['AWS', 'Azure', 'Docker', ...];

// Machine Learning & Data Science
const mlSkills = ['NumPy', 'Pandas', 'Scikit-learn', ...];

// Design & Tools
const designSkills = ['Figma', 'Sketch', 'Adobe Creative Suite', ...];

// Development Tools & Practices
const toolsSkills = ['Git', 'CI/CD', 'Agile/Scrum', ...];
```

Skills are organized into two scrolling sections:
- **Technical Expertise**: Development Stack & Technologies (40+ skills)
- **Design & Tools**: Design Tools & Development Practices

### Change Colors

Edit CSS variables in `src/styles/index.css`:

```css
:root {
  --background: #0f0f0f;
  --text: #ffffff;
  --accent: #ff3c00;
  /* ... other colors */
}
```

## Performance Optimizations

- **Component-based architecture** for code splitting
- **CSS animations** instead of JavaScript for better performance
- **Intersection Observer** for efficient scroll animations
- **Lazy loading** for images
- **Optimized assets** in production build

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

ISC

## Author

**Dennis Sharon Cheruvathoor**
- Email: csdsharon@gmail.com
- GitHub: [@cheruvathoorshajd](https://github.com/cheruvathoorshajd)
- LinkedIn: [csdsharon](https://www.linkedin.com/in/csdsharon)

---

Built with ❤️ using React

# 🎨 Professional Portfolio

A modern, professional portfolio built with **React 19**, featuring smooth animations, clean design, and optimal performance.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://cheruvathoorshajd.github.io/Professional-Portfolio)
[![React](https://img.shields.io/badge/React-19.0-blue)](https://reactjs.org/)
[![License](https://img.shields.io/badge/license-ISC-green)](LICENSE)

## 🌐 Live Demo

**Visit the live portfolio:** [https://cheruvathoorshajd.github.io/Professional-Portfolio](https://cheruvathoorshajd.github.io/Professional-Portfolio)

---

## ✨ Features

- 🎭 **Multi-language Preloader**: Greetings in 7 different languages with smooth transitions
- ✨ **Smooth Animations**: Intersection Observer API for scroll-triggered animations
- 🎨 **Professional Design**: Clean, minimalist interface with attention to detail
- 📱 **Fully Responsive**: Optimized for all device sizes
- ⚡ **Performance Optimized**: Fast loading with React best practices
- 🎯 **Interactive Elements**: Magnetic buttons and hover effects
- 🔄 **Infinite Scroll**: Skills section with continuous animation

---

## 🛠️ Tech Stack

- **React 19** - Modern UI library
- **CSS3** - Custom animations and styling
- **Intersection Observer API** - Efficient scroll animations
- **React Hooks** - State and lifecycle management
- **GitHub Pages** - Deployment platform

---

## 🎨 Design System

### Color Scheme
```css
--background: #0f0f0f;  /* Deep black background */
--text: #ffffff;         /* Pure white text */
--accent: #ff3c00;       /* Vibrant orange accent */
--secondary: #333333;    /* Dark gray */
--blue: #5352ed;         /* Bright blue */
```

### Typography
- **Headings**: Della Respira
- **Body**: Hatton

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/cheruvathoorshajd/Professional-Portfolio.git
   cd Professional-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

---

## 📁 Project Structure

```
Professional-Portfolio/
├── public/
│   ├── index.html
│   ├── Boston.png
│   ├── BizzNex logo.png
│   ├── AviaOhr.png
│   ├── VOND.2.png
│   ├── Medstar.png
│   └── Brand.webp
├── src/
│   ├── components/
│   │   ├── Preloader.js      # Multi-language greeting preloader
│   │   ├── Navigation.js     # Fixed navigation with smooth scroll
│   │   ├── Hero.js           # Landing section with animations
│   │   ├── About.js          # About section with fade-in effects
│   │   ├── Skills.js         # Infinite scrolling skills
│   │   ├── Projects.js       # Project showcase with hover effects
│   │   ├── Contact.js        # Contact section with magnetic buttons
│   │   └── Footer.js         # Footer component
│   ├── styles/
│   │   ├── index.css         # Global styles and CSS variables
│   │   ├── App.css           # Main app styles
│   │   ├── Preloader.css     # Preloader animations
│   │   ├── Navigation.css    # Navigation styles
│   │   ├── Hero.css          # Hero section styles
│   │   ├── About.css         # About section styles
│   │   ├── Skills.css        # Skills section with animations
│   │   ├── Projects.css      # Project showcase styles
│   │   ├── Contact.css       # Contact section styles
│   │   └── Footer.css        # Footer styles
│   ├── hooks/
│   │   └── useAnimations.js  # Custom animation hooks
│   ├── constants.js          # Centralized data constants
│   ├── App.js               # Main app component
│   └── index.js             # React entry point
├── .gitignore
├── package.json
└── README.md
```

---

## 🎯 Component Overview

### Preloader
- Multi-language greeting animation (7 languages)
- Smooth fade transitions between greetings
- Elegant slide-up exit animation
- Seamless transition to main content

### Navigation
- Fixed navigation bar with scroll effects
- Smooth scroll to sections
- Responsive hamburger menu
- Active section highlighting

### Hero
- Large, impactful title with gradient effect
- Animated text entrance
- Call-to-action buttons with hover effects
- Scroll indicator

### About
- Two-column responsive layout
- Fade-in animations on scroll
- Image hover effects with scale transformation
- Professional bio section

### Skills
- Infinite horizontal scroll animation
- Two separate sections (Technical & Design)
- Pause on hover functionality
- Smooth continuous loop

### Projects
- Vertical showcase layout
- Image hover effects with zoom
- Magnetic "View" buttons that follow cursor
- Staggered entrance animations

### Contact
- Magnetic button effects
- Gradient text animations
- Social media links with hover effects
- Email integration
- updated with custom domain - cheruvathoor.com

---

## 🎨 Customization

### Update Projects

Edit `src/components/Projects.js`:

```javascript
const projectsData = [
  {
    title: 'Your Project Name',
    category: 'Project Category',
    image: '/your-image.png',
    link: 'https://your-project-link.com'
  },
  // Add more projects...
];
```

### Update Skills

Edit `src/components/Skills.js`:

```javascript
const technicalSkills = ['React', 'JavaScript', 'Node.js', ...];
const designSkills = ['Figma', 'Photoshop', 'Illustrator', ...];
```

### Update Personal Information

Edit `src/constants.js`:

```javascript
export const PERSONAL_INFO = {
  name: 'Your Name',
  email: 'your.email@example.com',
  github: 'yourusername',
  linkedin: 'yourprofile'
};
```

### Change Colors

Edit CSS variables in `src/styles/index.css`:

```css
:root {
  --background: #0f0f0f;
  --text: #ffffff;
  --accent: #ff3c00;
  /* Customize other colors */
}
```

---

## 📦 Build & Deployment

### Build for Production

```bash
npm run build
```

Creates an optimized production build in the `build` folder.

### Deploy to GitHub Pages

```bash
npm run deploy
```

This will:
1. Build the production version
2. Deploy to `gh-pages` branch
3. Make your site live at: `https://[username].github.io/Professional-Portfolio`

### Manual Deployment

You can also deploy to other platforms:

- **Vercel**: `vercel --prod`
- **Netlify**: Drag and drop the `build` folder
- **AWS S3**: Upload the `build` folder contents

---

## ⚡ Performance Optimizations

- **Component-based architecture** for efficient code splitting
- **CSS animations** instead of JavaScript for better performance
- **Intersection Observer** for efficient scroll-triggered animations
- **Optimized images** and assets
- **Production build** with minification and compression
- **Lazy loading** for images and components

---

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs the app in development mode |
| `npm test` | Launches the test runner |
| `npm run build` | Builds the app for production |
| `npm run deploy` | Deploys to GitHub Pages |
| `npm run eject` | Ejects from Create React App |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the ISC License.

---

## 👤 Author

**Dennis Sharon Cheruvathoor**

- 📧 Email: [dennis@cheruvathoor.com](mailto:csdsharon@gmail.com)
- 🐙 GitHub: [@cheruvathoorshajd](https://github.com/cheruvathoorshajd)
- 💼 LinkedIn: [csdsharon](https://www.linkedin.com/in/csdsharon)


---

## 🙏 Acknowledgments

- React team for the amazing framework
- Create React App for the build setup
- GitHub Pages for free hosting
- All open-source contributors

---

## 📊 Project Stats

- **Total Components**: 8
- **Total CSS Files**: 10
- **Bundle Size (gzipped)**: 65.48 KB
- **Build Time**: ~10 seconds
- **Lighthouse Score**: 95+

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Built with ❤️ using React

[View Live Demo](https://cheruvathoorshajd.github.io/Professional-Portfolio) • [Report Bug](https://github.com/cheruvathoorshajd/Professional-Portfolio/issues) • [Request Feature](https://github.com/cheruvathoorshajd/Professional-Portfolio/issues)

</div>

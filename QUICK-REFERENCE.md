# 🚀 Quick Reference - Common Tasks

## Development Commands

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Open in browser
# http://localhost:3000/cheruvathoorshajd/Portfolio
```

---

## Update Content

### 1. Change Projects
**File:** `src/constants.js`

```javascript
export const PROJECTS = [
  {
    id: 1,
    title: 'Your Project Name',
    category: 'Your Category',
    image: '/your-image.png',  // Must be in public/
    link: 'https://your-link.com',
    description: 'Brief description'
  }
];
```

### 2. Change Skills
**File:** `src/constants.js`

```javascript
export const TECHNICAL_SKILLS = [
  'JavaScript', 'React', 'Node.js'
  // Add more...
];

export const DESIGN_SKILLS = [
  'Figma', 'Photoshop', 'Sketch'
  // Add more...
];
```

### 3. Change About Text
**File:** `src/constants.js`

```javascript
export const ABOUT = {
  paragraphs: [
    "Your first paragraph...",
    "Your second paragraph..."
  ],
  image: '/your-image.png',
  imageAlt: 'Description'
};
```

### 4. Change Contact Info
**File:** `src/constants.js`

```javascript
export const PERSONAL_INFO = {
  name: 'Your Name',
  email: 'your@email.com',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourprofile'
};
```

---

## Change Colors

**File:** `src/styles/index.css`

```css
:root {
  --background: #0f0f0f;  /* Dark background */
  --text: #ffffff;        /* White text */
  --accent: #ff3c00;      /* YOUR primary color */
  --blue: #5352ed;        /* Button color */
}
```

---

## Add New Images

1. Copy image to `public/` folder
2. Reference in code as `/image-name.png`

```javascript
// Example in constants.js
image: '/new-project.png'
```

---

## File Structure Quick View

```
src/
├── components/          # All React components
│   ├── Preloader.js
│   ├── Navigation.js
│   ├── Hero.js
│   ├── About.js
│   ├── Skills.js
│   ├── Projects.js
│   ├── Contact.js
│   └── Footer.js
│
├── styles/             # All CSS files
│   ├── index.css       # Global + colors
│   └── [Component].css # Component styles
│
├── hooks/              # Custom React hooks
│   └── useAnimations.js
│
├── constants.js        # ⭐ YOUR CONTENT HERE
├── App.js             # Main app
└── index.js           # Entry point

public/
├── index.html
├── *.png              # Your images
└── fonts/             # Your fonts (create this)
```

---

## Deployment Quick Steps

### Netlify (Recommended)

1. **Sign up:** https://netlify.com
2. **Connect repo:** Link GitHub
3. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `build`
4. **Deploy!**

### Vercel

1. **Sign up:** https://vercel.com
2. **Import project:** From GitHub
3. **Deploy!** (auto-detects React)

### GitHub Pages

1. **Install:** `npm install gh-pages --save-dev`
2. **Add to package.json:**
   ```json
   "homepage": "https://yourusername.github.io/Portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. **Deploy:** `npm run deploy`

---

## Troubleshooting Quick Fixes

### npm start fails
```bash
rm -rf node_modules package-lock.json
npm install
npm start
```

### Images not showing
- Check they're in `public/` folder
- Use `/image.png` not `./image.png`

### Fonts not loading
- Create `public/fonts/` folder
- Copy font files there
- Check font names in CSS match files

### Port already in use
- React will suggest port 3001
- Or stop process on port 3000

---

## Component Overview

| Component | Purpose | Edit To |
|-----------|---------|---------|
| Preloader | Greeting animation | Add languages |
| Navigation | Top nav + menu | Add menu items |
| Hero | Title section | Change title/subtitle |
| About | Bio section | Update bio text |
| Skills | Scrolling tags | Add/remove skills |
| Projects | Showcase | Add/edit projects |
| Contact | Contact info | Update links |
| Footer | Copyright | Update year/text |

---

## CSS Files Overview

| File | Controls | Common Edits |
|------|----------|--------------|
| index.css | Global styles | Colors, fonts |
| App.css | App container | Background |
| Preloader.css | Preloader | Animation speed |
| Navigation.css | Nav/menu | Menu style |
| Hero.css | Hero section | Title size |
| About.css | About layout | Column layout |
| Skills.css | Skills scroll | Animation speed |
| Projects.css | Projects | Card style |
| Contact.css | Contact section | Button style |
| Footer.css | Footer | Text style |

---

## Performance Tips

1. **Optimize images:**
   - Use WebP format
   - Compress before adding
   - Max width: 1920px

2. **Keep bundle small:**
   - Only import what you use
   - Remove unused code

3. **Test regularly:**
   - Check console for errors
   - Test on different devices
   - Use Lighthouse in Chrome

---

## Common Customizations

### Change animation speed
**File:** `src/styles/[Component].css`
```css
transition: all 0.8s ease; /* Change 0.8s */
animation: name 2s infinite; /* Change 2s */
```

### Add new section
1. Create `NewSection.js` in `src/components/`
2. Create `NewSection.css` in `src/styles/`
3. Import in `App.js`
4. Add to render

### Change fonts
**File:** `src/styles/index.css`
```css
:root {
  --heading-font: 'Your Font', serif;
  --body-font: 'Your Font', sans-serif;
}
```

---

## Useful VS Code Extensions

- **ES7+ React Snippets** - Quick React code
- **Auto Rename Tag** - Rename pairs
- **Prettier** - Code formatting
- **ESLint** - Code quality
- **Live Server** - Test builds

---

## Quick Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Save | Ctrl+S |
| Find | Ctrl+F |
| Replace | Ctrl+H |
| Multi-cursor | Alt+Click |
| Format | Shift+Alt+F |

---

## Resources

- **React Docs:** https://react.dev
- **CSS Tricks:** https://css-tricks.com
- **Can I Use:** https://caniuse.com
- **MDN:** https://developer.mozilla.org

---

## Remember

- ✅ Edit `src/constants.js` for content
- ✅ Images go in `public/` folder
- ✅ Always test after changes
- ✅ Commit changes regularly
- ✅ Keep backups

---

**Your Portfolio:** http://localhost:3000/cheruvathoorshajd/Portfolio

**Need help?** Check the full guides:
- SETUP-GUIDE.md
- README-REACT.md
- MIGRATION-COMPLETE.md

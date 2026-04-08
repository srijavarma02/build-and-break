# Build & Break 2.0 - React Conversion

A modern React conversion of the Build & Break 2.0 event website, maintaining pixel-perfect design with glassmorphism effects and advanced animations.

## 🚀 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first CSS framework
- **CSS Modules** - For complex component styling
- **clsx** - Conditional className utility

## 📁 Project Structure

```
build-and-break-react/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── common/              ✅ COMPLETED
│   │   │   ├── Button.jsx
│   │   │   ├── button.css
│   │   │   ├── GlassCard.jsx
│   │   │   ├── glass-card.css
│   │   │   ├── SectionDivider.jsx
│   │   │   └── RevealWrapper.jsx
│   │   ├── layout/              🔄 IN PROGRESS
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   └── sections/            📋 TODO
│   │       ├── Hero.jsx
│   │       ├── About.jsx
│   │       ├── Highlights.jsx
│   │       ├── EventDetails.jsx
│   │       ├── EventStructure.jsx
│   │       ├── Participation.jsx
│   │       ├── WhyParticipate.jsx
│   │       ├── PreviousEdition.jsx
│   │       ├── AboutISOC.jsx
│   │       ├── OtherEvents.jsx
│   │       ├── Sponsorship.jsx
│   │       ├── Contact.jsx
│   │       └── Register.jsx
│   ├── hooks/                   ✅ COMPLETED
│   │   ├── useScrollReveal.js
│   │   ├── useNavScroll.js
│   │   ├── useCountUp.js
│   │   └── useGalaxyCanvas.js   📋 TODO
│   ├── styles/                  ✅ COMPLETED
│   │   ├── globals.css
│   │   └── animations.css
│   ├── utils/                   ✅ COMPLETED
│   │   └── constants.js
│   ├── App.jsx                  ✅ COMPLETED
│   └── main.jsx                 ✅ COMPLETED
├── .gitignore
├── package.json
├── vite.config.js
├── tailwind.config.js           ✅ COMPLETED
├── postcss.config.js            ✅ COMPLETED
└── README.md
```

## 🛠️ Setup & Installation

```bash
# Navigate to project directory
cd build-and-break-react

# Install dependencies (already done)
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## ✅ Completed Components

### Common Components
- **Button** - Primary & Outline variants with ripple effect
- **GlassCard** - Glassmorphism card with hover animations
- **SectionDivider** - Gradient divider line
- **RevealWrapper** - Scroll reveal animation wrapper

### Custom Hooks
- **useScrollReveal** - IntersectionObserver for scroll animations
- **useNavScroll** - Navigation scroll state management
- **useCountUp** - Animated number counter for stats

### Styles
- **globals.css** - CSS variables, base styles, container
- **animations.css** - All keyframe animations

### Configuration
- **Tailwind CSS** - Custom theme with brand colors
- **PostCSS** - Autoprefixer configuration
- **Vite** - Build configuration

## 📋 Next Steps

### Phase 1: Layout Components
1. Create `Navbar.jsx` with:
   - Fixed positioning with scroll effect
   - Hamburger menu for mobile
   - Active link highlighting
   - Smooth scroll navigation

2. Create `Footer.jsx` with:
   - Brand info & social links
   - Quick links & legal links
   - Responsive grid layout

### Phase 2: Hero Section
1. Create `Hero.jsx` with:
   - Galaxy canvas animation (useGalaxyCanvas hook)
   - Parallax star field
   - Shooting stars effect
   - Hero content with reveal animations

### Phase 3: Content Sections
Create remaining section components in order:
1. About
2. Highlights
3. EventDetails
4. EventStructure
5. Participation
6. WhyParticipate
7. PreviousEdition (with stat counter)
8. AboutISOC
9. OtherEvents
10. Sponsorship
11. Contact
12. Register

## 🎨 Design Principles

- **Pixel-Perfect** - Exact match to original HTML design
- **No Simplification** - All animations and effects preserved
- **Glassmorphism** - Maintained with backdrop-filter
- **Smooth Animations** - Cubic-bezier easing functions
- **Responsive** - Mobile-first approach
- **Performance** - Optimized with React best practices

## 🔧 Development Guidelines

### Component Structure
```jsx
import './component-name.css';

const ComponentName = ({ prop1, prop2 }) => {
  // Hooks
  // Event handlers
  // Render logic
  
  return (
    <div className="component-name">
      {/* JSX */}
    </div>
  );
};

export default ComponentName;
```

### Styling Approach
- Use CSS variables from `globals.css`
- Component-specific styles in separate CSS files
- Tailwind utilities for simple spacing/layout
- CSS modules for complex animations

### Animation Guidelines
- Use `RevealWrapper` for scroll animations
- Maintain original timing functions
- Keep keyframe animations in `animations.css`
- Use `useScrollReveal` hook in App.jsx

## 📝 Notes

- Original HTML file: `../build-and-break/index.html`
- All animations preserved from original
- Galaxy canvas uses HTML5 Canvas API
- Font Awesome icons via CDN
- Google Fonts: Space Grotesk

## 🚦 Current Status

**Phase**: Foundation Complete ✅  
**Next**: Layout Components (Navbar & Footer)  
**Progress**: ~30% complete

---

Built with ❤️ for ISOC Academic Hub

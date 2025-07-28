# 🎓 AI & Data Science Department Website (HTML/CSS/JS)

A visually stunning, animated multi-page educational website for the Department of Artificial Intelligence and Data Science at Karpagam Academy of Higher Education, built with pure HTML, CSS, and JavaScript.

![Website Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

### 🎨 **Modern Design**
- **Futuristic UI/UX** with glassmorphism effects
- **CSS Grid & Flexbox** for responsive layouts
- **Custom CSS animations** and transitions
- **Gradient backgrounds** with vibrant neon colors
- **Google Fonts (Poppins)** for modern typography

### 🚀 **Pure CSS Animations**
- **Keyframe animations** for smooth effects
- **Transform & transition** properties
- **Intersection Observer API** for scroll-triggered animations
- **Parallax scrolling** effects
- **Hover animations** and micro-interactions

### 📱 **Pages Structure**
1. **index.html** - About Department page
2. **faculty.html** - Faculty Page 1 (2 members)
3. **faculty-page2.html** - Faculty Page 2 (4 members)
4. **faculty-page3.html** - Faculty Page 3 (4 members)
5. **introduction.html** - AI/ML/DL/GenAI introduction
6. **achievements.html** - Department achievements timeline
7. **quiz.html** - Interactive quiz with QR code
8. **hod-address.html** - Head of Department address

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Advanced styling with Grid, Flexbox, Animations
- **Vanilla JavaScript** - Interactive functionality
- **Google Fonts** - Poppins font family
- **CSS Custom Properties** - For consistent theming

## 📦 Installation & Setup

### Quick Start

1. **Download the files**
   \`\`\`bash
   # Download all HTML, CSS, and JS files
   # Or clone from repository
   \`\`\`

2. **Open in browser**
   \`\`\`bash
   # Simply open index.html in your web browser
   # Or use a local server for development
   \`\`\`

3. **For development server (optional)**
   \`\`\`bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   \`\`\`

4. **Access the website**
   \`\`\`
   http://localhost:8000
   \`\`\`

## 📁 File Structure

\`\`\`
ai-department-website/
├── index.html              # Home page (About Department)
├── faculty.html            # Faculty Page 1
├── faculty-page2.html      # Faculty Page 2
├── faculty-page3.html      # Faculty Page 3
├── introduction.html       # Technologies Introduction
├── achievements.html       # Department Achievements
├── quiz.html              # Interactive Quiz
├── hod-address.html       # HOD Address
├── styles.css             # Main stylesheet
├── script.js              # JavaScript functionality
└── README.md              # Documentation
\`\`\`

## 🎯 Key Features Implementation

### CSS Animations
- **@keyframes** for complex animations
- **CSS transforms** for smooth movements
- **Backdrop-filter** for glassmorphism effects
- **CSS Grid** for responsive layouts

### JavaScript Functionality
- **Intersection Observer** for scroll animations
- **Mobile navigation** toggle
- **Smooth scrolling** between sections
- **Dynamic content** animations
- **Counter animations** for statistics

### Responsive Design
- **Mobile-first** approach
- **CSS Grid & Flexbox** for layouts
- **Media queries** for different screen sizes
- **Touch-friendly** navigation

## 🎨 Design System

### Color Palette
\`\`\`css
/* Primary Colors */
Cyan: #06b6d4
Purple: #8b5cf6
Blue: #3b82f6

/* Secondary Colors */
Green: #10b981
Orange: #f59e0b
Red: #ef4444

/* Backgrounds */
Dark: #0f172a
Purple-Dark: #581c87
\`\`\`

### Typography
\`\`\`css
/* Font Family */
font-family: 'Poppins', sans-serif;

/* Font Weights */
Light: 300
Regular: 400
Medium: 500
SemiBold: 600
Bold: 700
ExtraBold: 800
Black: 900
\`\`\`

### Layout System
- **Container max-width**: 1200px
- **Grid gaps**: 16px, 24px, 32px, 48px
- **Border radius**: 8px, 12px, 16px, 24px
- **Spacing scale**: 8px, 16px, 24px, 32px, 48px, 64px, 80px

## 🔧 Customization Guide

### Adding New Pages
1. Create new HTML file following the structure
2. Include navigation menu
3. Add to `script.js` for active nav state
4. Update links in all existing pages

### Modifying Animations
\`\`\`css
/* Example: Modify fade-in animation */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(50px); /* Change distance */
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Apply with different timing */
.animate-fadeInUp {
    animation: fadeInUp 1s ease forwards; /* Adjust duration */
}
\`\`\`

### Updating Colors
\`\`\`css
/* Change primary gradient */
.hero-title {
    background: linear-gradient(135deg, #your-color, #another-color);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
\`\`\`

### Adding Faculty Members
1. Open respective faculty page
2. Duplicate existing faculty card structure
3. Update image, name, position, and domain
4. Adjust grid layout if needed

## 📱 Browser Support

- ✅ **Chrome** 60+
- ✅ **Firefox** 55+
- ✅ **Safari** 12+
- ✅ **Edge** 79+
- ✅ **Mobile browsers** (iOS Safari, Chrome Mobile)

## 🚀 Performance Features

- **CSS-only animations** for better performance
- **Optimized images** with proper sizing
- **Minimal JavaScript** for core functionality
- **Progressive enhancement** approach
- **Mobile-optimized** interactions

## 📊 Animation Details

### Scroll Animations
- **Intersection Observer** for performance
- **Staggered animations** for multiple elements
- **Threshold-based** triggering

### Hover Effects
- **Transform scales** and translations
- **Box-shadow** enhancements
- **Color transitions**

### Mobile Animations
- **Touch-friendly** interactions
- **Reduced motion** for better UX
- **Performance optimized**

## 🔍 SEO & Accessibility

### SEO Features
- Semantic HTML5 structure
- Meta tags for each page
- Proper heading hierarchy
- Alt text for images

### Accessibility
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios
- Focus indicators

## 📞 Contact Information

**Department of AI & Data Science**  
Karpagam Academy of Higher Education  
Coimbatore, Tamil Nadu, India

- **Email**: aidsdept@kahedu.edu.in
- **Website**: [Department Website](https://your-domain.com)

## 🤝 Contributing

1. Fork the repository
2. Make your changes
3. Test across different browsers
4. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ using pure HTML, CSS, and JavaScript**

![Technologies](https://img.shields.io/badge/HTML5-CSS3-JavaScript-blue)
\`\`\`

I've created a complete HTML/CSS/JavaScript version of your AI & Data Science Department website with all the requested features:

## 🌟 **What's Included:**

### **Complete Website Structure:**
- **8 HTML pages** with full navigation
- **Single CSS file** (styles.css) with all animations and responsive design
- **JavaScript file** (script.js) with interactive functionality
- **Comprehensive README.md** with setup instructions

### **Key Features Implemented:**

1. **Pure HTML/CSS/JS** - No frameworks or dependencies
2. **Glassmorphism effects** with backdrop-filter
3. **Smooth CSS animations** using keyframes
4. **Responsive design** with CSS Grid and Flexbox
5. **Interactive JavaScript** for navigation and scroll effects
6. **Faculty pages** with sample images and all 10 members
7. **Timeline achievements** with animated cards
8. **QR code interface** with tech gadget styling
9. **HOD address** with text reveal animations

### **Performance Optimizations:**
- **Intersection Observer API** for scroll-triggered animations
- **CSS-only animations** for better performance
- **Minimal JavaScript** footprint
- **Mobile-optimized** interactions

### **Easy Customization:**
- **Replace placeholder images** with actual faculty photos
- **Update content** in HTML files
- **Modify colors** in CSS custom properties
- **Add new pages** following the same structure

The website is ready to use - just open `index.html` in a web browser! All the modern design elements, animations, and functionality you requested have been implemented using only HTML, CSS, and JavaScript.

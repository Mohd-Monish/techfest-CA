# Techfest IIT Bombay - Task 3: Responsive & Accessible Landing Page

[![Netlify Status](https://api.netlify.com/api/v1/badges/b103dc09-763f-41a0-b895-4f50348322aa/deploy-status)](https://app.netlify.com/projects/techfest-ca/deploys)

## 🎯 Project Overview

This is a fully responsive, accessible single-page website for Techfest IIT Bombay 2025, built as part of Task 3 of the Campus Ambassador program. The website features semantic HTML, mobile-first CSS, client-side form validation, and comprehensive accessibility features.

## ✨ Features

### Responsiveness
- **Mobile-first design** optimized for 320px to 1440px+ screens
- Responsive breakpoints:
  - Small (320px - 576px)
  - Medium (577px - 768px)
  - Large (769px - 1024px)
  - Extra Large (1025px+)
- Fluid typography using `clamp()`
- Flexible grid layouts with CSS Grid and Flexbox

### Accessibility (WCAG 2.1 AA Compliant)
- ✅ Semantic HTML5 structure (`<header>`, `<main>`, `<section>`, `<footer>`)
- ✅ ARIA labels and roles for screen readers
- ✅ Full keyboard navigation support
- ✅ Focus indicators with high contrast outlines
- ✅ Accessible form controls with proper labels
- ✅ Screen reader announcements for form validation
- ✅ `aria-live` regions for dynamic content
- ✅ Reduced motion support for users with motion sensitivity
- ✅ High contrast mode support

### Form Validation
- **Client-side validation** using plain JavaScript (no libraries)
- Real-time validation on blur
- Field-specific error messages:
  - Empty field detection
  - Email format validation
  - Phone number validation (10+ digits)
  - Message length validation (10+ characters)
  - Required consent checkbox
- Success/Error UI states with visual feedback
- Accessible error announcements for screen readers

### Technical Stack
- **HTML5** - Semantic markup
- **CSS3** - Modern responsive design (no frameworks)
- **JavaScript (ES6+)** - Form validation and interactivity
- **No dependencies** - Pure vanilla code

## 📂 Project Structure

```
Updated Task-3/
├── index.html       # Main HTML file with semantic structure
├── styles.css       # Mobile-first responsive CSS
├── script.js        # Form validation and interactive features
└── README.md        # This file
```

## 🚀 Local Development

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code recommended)
- Live Server extension (optional but recommended)

### Running Locally

1. **Clone or download** this repository

2. **Open in browser:**
   - Simply open `index.html` in your web browser, OR
   - Use VS Code Live Server:
     ```
     Right-click on index.html → Open with Live Server
     ```

3. **Test responsiveness:**
   - Open DevTools (F12)
   - Toggle device toolbar (Ctrl+Shift+M / Cmd+Shift+M)
   - Test different viewport sizes

## 🌐 Deployment Instructions

### Option 1: Netlify (Recommended)

1. **Via Netlify Drop:**
   - Go to [https://app.netlify.com/drop](https://app.netlify.com/drop)
   - Drag and drop the `Updated Task-3` folder
   - Get instant live link

2. **Via Git (Better for updates):**
   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli
   
   # Login to Netlify
   netlify login
   
   # Deploy from project folder
   cd "Updated Task-3"
   netlify deploy --prod
   ```

3. **Custom domain (optional):**
   - Go to Site settings → Domain management
   - Add custom domain

### Option 2: Vercel

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   cd "Updated Task-3"
   vercel --prod
   ```

3. **Or use Vercel dashboard:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New" → "Project"
   - Import your Git repository or drag & drop folder

### Option 3: GitHub Pages

1. **Create repository** on GitHub
2. **Push code:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Techfest Task 3"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
3. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: Deploy from branch (main)
   - Folder: / (root)
   - Save

## ✅ Testing Checklist

### Responsiveness
- [ ] Test at 320px (iPhone SE)
- [ ] Test at 375px (iPhone 12)
- [ ] Test at 768px (iPad)
- [ ] Test at 1024px (iPad Pro)
- [ ] Test at 1440px (Desktop)
- [ ] Test browser zoom (50%, 100%, 200%)

### Accessibility
- [ ] Navigate entire site using only keyboard (Tab, Shift+Tab, Enter)
- [ ] Check focus indicators are visible
- [ ] Test with screen reader (NVDA, JAWS, or VoiceOver)
- [ ] Validate HTML with [W3C Validator](https://validator.w3.org/)
- [ ] Test with [WAVE accessibility tool](https://wave.webaim.org/)
- [ ] Check contrast ratios meet WCAG AA standards

### Form Validation
- [ ] Submit empty form (all fields should show errors)
- [ ] Enter invalid email (should show format error)
- [ ] Enter short phone number (should show length error)
- [ ] Enter short message (should show minimum length error)
- [ ] Submit without consent checkbox (should show error)
- [ ] Submit valid form (should show success message)
- [ ] Test error messages are announced to screen readers

### Cross-Browser Testing
- [ ] Google Chrome
- [ ] Mozilla Firefox
- [ ] Safari (if on Mac)
- [ ] Microsoft Edge

## 📋 Evaluation Criteria Addressed

| Criteria | Implementation |
|----------|----------------|
| **Responsive Design** | Mobile-first CSS with breakpoints for 320px-1440px+ |
| **Semantic HTML** | `<header>`, `<main>`, `<section>`, `<footer>`, proper heading hierarchy |
| **Accessibility** | ARIA labels, keyboard navigation, focus management, screen reader support |
| **Form Validation** | Client-side validation with plain JS, friendly error messages |
| **Success/Error States** | Visual feedback with color-coded messages and icons |
| **No Frameworks** | Pure HTML/CSS/JS - no Bootstrap, Tailwind, or jQuery |
| **Visual Polish** | Modern design with smooth transitions and hover effects |
| **Deployment** | Ready for Netlify/Vercel deployment |

## 🎨 Design Decisions

### Color Scheme
- **Primary:** Blue (#0066cc) - Trust and technology
- **Secondary:** Orange (#ff6600) - Energy and innovation
- **Accent:** Purple gradient - Premium and futuristic
- **Neutral:** Gray scale for text hierarchy

### Typography
- System font stack for performance
- Fluid typography with `clamp()` for smooth scaling
- Clear hierarchy with proper heading levels

### Layout
- CSS Grid for complex layouts (stats, events)
- Flexbox for one-dimensional layouts (navigation, buttons)
- Container-based responsive design

## 🐛 Known Issues & Limitations

- Mock API endpoint (form doesn't actually submit to server)
- Social media icons use emoji placeholders (use SVG icons in production)
- No backend integration (would need Node.js/Python server for real submissions)

## 🔧 Future Enhancements

- Add animations and transitions (AOS, Intersection Observer)
- Implement dark mode toggle
- Add multilingual support
- Connect to real backend API
- Add captcha for form security
- Implement proper email sending service

## 📱 Contact Form Mocked Endpoint

The form currently uses a mock API call that simulates:
- 1.5 second network delay
- 90% success rate (for testing error states)
- Console logging of submitted data

To integrate with a real backend, replace the `mockAPICall()` function in `script.js` with:

```javascript
async function submitForm(data) {
    const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    
    return await response.json();
}
```

## 📄 License

This project is created for the Techfest IIT Bombay Campus Ambassador program.

## 👨‍💻 Author

Campus Ambassador - Techfest IIT Bombay 2025-26

## 🙏 Acknowledgments

- Techfest IIT Bombay for the opportunity
- Content based on official Techfest guidelines and specifications

---

**Pro Tip:** Test with keyboard navigation only and screen readers to truly understand accessibility! 🎯

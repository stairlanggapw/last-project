# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.
```
## Project Overview
This is a company profile website for "Green Garden" (referred to as "Green View For Good Life" in the hero section) - a professional landscaping and gardening services company. The website consists of two main HTML pages:
1. `index.html` - Main company profile page with sections for Home, About, Services, Gallery, Blog, Projects, and Contact
2. `payment.html` - Payment/plans page for service subscriptions/plans

## Technology Stack
- HTML5
- CSS3 (with separate style.css and style1.css)
- JavaScript (vanilla JS with Lenis for smooth scrolling)
- External libraries: 
  - Lenis (smooth scrolling library)
  - IonIcons (icons)
  - Lottie Player (for animations)

## Project Structure
```
company-profile/
├── index.html              # Main homepage
├── payment.html            # Payment/plans page  
├── style.css               # Main stylesheet for index.html
├── style1.css              # Stylesheet for payment.html
├── script.js               # Shared JavaScript functionality
└── assets/                 # Image and media assets
    ├── Images (logos, projects, services, team, etc.)
    └── Icons and animations
```

## Key Features Implemented
- Smooth scrolling with Lenis library
- Mobile-responsive navigation menu
- Animated sections on scroll
- Contact form with Formspree integration (Web3Forms API)
- Payment/plans selection modal
- Interactive UI elements (tabs, modals, buttons)

## Development Guidelines

### Common Commands
Since this is a static HTML/CSS/JS project:
- **Development**: Simply open `index.html` or `payment.html` in a browser
- **No build steps**: No compilation or bundling required
- **Testing**: Open files in browser to test responsiveness and functionality
- **Debugging**: Use browser DevTools for debugging JavaScript and CSS

### Architecture Notes
1. **Modular CSS**: Separate stylesheets for different pages (`style.css` for main site, `style1.css` for payment page)
2. **Shared JavaScript**: `script.js` contains functionality used across both pages (smooth scrolling, mobile menu, form handling)
3. **Asset Organization**: All media assets stored in the `assets/` folder
4. **Form Integration**: Contact form uses Web3Forms service (requires API key in hidden input)
5. **Smooth Scrolling**: Implemented using Lenis library with custom easing functions

### Best Practices for This Codebase
1. Maintain separation between `style.css` (main site) and `style1.css` (payment page)
2. Keep JavaScript modular in `script.js` - avoid duplicating functionality
3. Optimize images in assets folder for web performance
4. Maintain responsive design principles already established
5. Keep form validation and API integration consistent
6. Preserve smooth scrolling behavior when adding new interactive elements

### File-Specific Notes
- **index.html**: Contains all main company information sections
- **payment.html**: Handles service plan selection and payment processing
- **script.js**: Contains shared functionality like smooth scrolling, mobile menu, and form handling
- **style.css**: Primary styling for index.html
- **style1.css**: Specific styling for payment.html page

### Getting Started
1. Clone or copy the repository
2. Open `index.html` in a web browser to view the main site
3. Open `payment.html` to view the pricing/plans page
4. Make changes to HTML, CSS, or JS files as needed
5. Test responsiveness across different screen sizes
6. For form functionality, ensure you have a valid Web3Forms API key in the form's hidden input field

This is a static website that doesn't require any build tools or dependencies beyond what's already included via CDN links in the HTML files.
● Company Profile Website - Green Garden

  A professional company profile website for Green Garden (also branded as "Green View For Good Life"), a landscaping and gardening services company. The
  website showcases the company's services, projects, team, and provides contact functionality with service plan selection.

  Features

  - Responsive Design: Mobile-friendly layout with adaptive navigation menu
  - Smooth Scrolling: Enhanced scrolling experience using Lenis library
  - Animated Sections: Content animations triggered on scroll
  - Interactive UI Elements:
    - Mobile navigation toggle
    - Service plan selection (Monthly/Yearly toggle)
    - Modal dialogs for purchase and success states
    - Active navigation highlighting based on scroll position
  - Contact Form: Integrated with Web3Forms for message submission
  - Service Plans: Interactive pricing table with Starter, Growth, and Enterprise options
  - Visual Assets: Professional image gallery showcasing services, projects, and team
  - Footer Navigation: Comprehensive site links and social media integration

  Technologies Used

  Frontend

  - HTML5: Semantic markup structure
  - CSS3: Custom styling with CSS variables and animations
  - JavaScript (Vanilla): DOM manipulation and interactive features

  External Libraries & Services

  - Lenis (https://github.com/studiometa/lenis): Smooth scrolling library
  - IonIcons (https://ionic.io/ionicons): Open-source icon set
  - Lottie Player (https://lottiefiles.com/): Web animation renderer
  - Web3Forms (https://web3forms.com/): Form backend service (API key required)

  Installation & Local Setup

  Since this is a static website, no build tools or dependencies installation is required:

  1. Clone or download the repository to your local machine
  2. Ensure all files maintain their relative directory structure:
  / (root)
  ├── index.html
  ├── payment.html
  ├── style.css
  ├── style1.css
  ├── script.js
  └── /assets
      ├── [image files]
      └── [icon/animation files]

  How to Run the Application

  1. Open in Browser: Simply open index.html in your preferred web browser to view the main company profile site
  2. Access Payment Page: Open payment.html to view the service plans and pricing section
  3. Test Responsiveness: Resize your browser window or use device developer tools to verify mobile responsiveness
  4. Form Testing: To test the contact form functionality, you'll need to:
    - Obtain a free API key from Web3Forms (https://web3forms.com/)
    - Replace the existing access_key value in the hidden input field of the contact form (in both index.html and potentially any forms in payment.html)

  Folder Structure

  company-profile/
  ├── index.html              # Main homepage with all company sections
  ├── payment.html            # Service plans and payment selection page
  ├── style.css               # Primary stylesheet for index.html
  ├── style1.css              # Stylesheet specific to payment.html
  ├── script.js               # Shared JavaScript functionality (smooth scrolling, menus, forms, modals)
  ├── CLAUDE.md               # AI assistant guidance file (this project)
  ├── README.md               # This file
  └── assets/
      ├── Background-1.png    # Main homepage background
      ├── Background-2.jpeg   # Alternative background
      ├── Background-3.jpeg   # Additional background assets
      ├── Client-1.jpeg       # Client testimonial image
      ├── Logo-GG-w200.png    # Small logo variant
      ├── Logo-GG-w500.png    # Main logo (used in headers/footers)
      ├── Project-*.jpeg      # Project showcase images
      ├── Service-*.jpg/jpeg  # Service offering images
      ├── worker2.png         # Team/worker illustration
      ├── favicon.ico         # Browser tab icon
      └── icons8-success.gif  # Success animation for payment modal

  Important Notes

  - Form Functionality: The contact form requires a valid Web3Forms API key to work properly. The current key in the HTML is a placeholder and should be
  replaced with your own for actual form submissions.
  - Asset Optimization: All images in the assets/ folder are optimized for web use but can be further compressed if needed for production deployment.
  - Customization: To customize colors, fonts, or styles, modify the CSS files (style.css for main site, style1.css for payment page) or adjust the CSS
  variables at the top of each stylesheet.
  - JavaScript Modifications: Interactive functionality is handled in script.js, including smooth scrolling, mobile menu, form handling, modal controls, and
  scroll-based animations.

  This website is ready to deploy as-is to any static web hosting service (Netlify, Vercel, GitHub Pages, etc.) after updating the Web3Forms API key if form
  functionality is required.
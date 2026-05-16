Here is Claude's plan:

Portfolio Rebuild Plan: Using Reference Design with User Data
Context
User has an incomplete portfolio conversion from vanilla HTML to React. The current implementation (d:\2porfolio) uses a custom dark theme but lacks the modern design, animations, and interactivity of the reference portfolio (github.com/mittal-parth/personal-portfolio). User wants the reference portfolio's styling and structure while preserving their personal data (projects, education, skills, contact info).

Key Differences to Address
Current Portfolio Issues:

Missing Framer Motion animations
No loading screen
Static design without scroll-triggered reveals
Blue accent colors instead of cyan/teal
No horizontal carousel for projects
No API integration features
Reference Portfolio Strengths:

Framer Motion with page transitions and scroll animations
Loading screen with Lottie animation
Cyan/teal color scheme (#00f6ff, #82E8EB)
Horizontal carousel for projects with navigation
Poppins font family for consistency
Modern glass-morphism effects with gradients
React Icons for tech stacks
Organized data structure via constants/
Implementation Strategy
Phase 1: Setup & Configuration
Update package.json with reference dependencies:

Add: framer-motion, react-lottie-player, react-icons, axios, smoothscroll-polyfill
Keep existing: React, Vite, Tailwind
Update tailwind.config.js:

Change colors: primary #00040f, secondary #00f6ff, dimWhite/dimBlue
Font: Only Poppins (remove audiowide, goldman, genos)
Custom breakpoints (xs, ss, sm, md, lg, xl)
Remove unnecessary font extensions
Replace src/index.css:

Use reference portfolio's CSS with gradients, animations, scrollbar styling
Keep smooth scrolling
Add gradient utilities (bg-blue-gradient, bg-black-gradient)
Create src/style.js:

Copy reference's consistent spacing/layout utilities
Provides boxWidth, flexCenter, paddingX/Y, marginX/Y, etc.
Phase 2: Data Migration
Create src/constants/index.js:

Migrate user's project data from current src/data/projects.js
Add user's education data (use existing from old portfolio)
Structure skills by category (Languages, Frameworks, Tools)
Add user's experiences/work history (from old portfolio or default)
Add achievements/awards if available
Add social media links (GitHub, LinkedIn already in old portfolio)
Add aboutMe section with tagline "B.Tech CSE(AIML) Student • Full Stack & AI Developer"
Prepare Lottie animation files:

For Hero section: use person-coding.json from reference (or default animation)
For Education section: use similar animation
Copy to src/lotties/
Phase 3: Component Rebuild
Rewrite components to match reference structure with user data:

src/components/Navbar.jsx

Fixed navbar with scroll-hide animation (Framer Motion)
Mobile hamburger menu
Reference: /tmp/personal-portfolio/src/components/Navbar.jsx
src/components/Hero.jsx

Large heading with gradient text
Lottie animation on right side
"Let's Connect" button for LinkedIn
User's name and intro
Reference: /tmp/personal-portfolio/src/components/Hero.jsx
src/components/SkillsAndExperience.jsx

Two-column layout: skills on left, experience timeline on right
Skills with React Icons and tooltips
Experience with organization logos, positions, dates
Reference: /tmp/personal-portfolio/src/components/SkillsAndExperience.jsx
src/components/Education.jsx

Feature cards with institution logos/names
Degrees and duration
Optional Lottie animation
Reference: /tmp/personal-portfolio/src/components/Education.jsx
src/components/Projects.jsx

CRITICAL: Horizontal carousel with prev/next navigation
Individual project cards with image, title, tech stack (React Icons), description
GitHub and live link buttons
Adjust from 320px→400px→500px responsive widths
Reference: /tmp/personal-portfolio/src/components/Projects.jsx
src/components/Achievements.jsx (Optional)

Grid of achievement cards
Can show hackathon wins, competitions, certifications
Reference: /tmp/personal-portfolio/src/components/Achievements.jsx
src/components/Footer.jsx

Contact section with tagline
Social media icons
Resume/GitHub buttons
Profile picture
Reference: /tmp/personal-portfolio/src/components/Footer.jsx
Utility Components:

Button.jsx - Reusable button with icon support
Loading.jsx - Fullscreen loading screen with Framer Motion
LetsConnect.jsx - CTA button for LinkedIn
LinkPreview.jsx - Optional hover preview component (can skip initially)
Stats.jsx - Optional GitHub stats (can skip initially)
src/components/index.js

Central export file for all components
Phase 4: App Structure
Rewrite src/App.jsx:

Add loading state (1.2s delay)
Wrap content in Framer Motion AnimatePresence
Use Framer Motion for page transitions
Stack all sections in proper order
Reference: /tmp/personal-portfolio/src/App.jsx
Update src/main.jsx:

Keep current React 18 setup
Ensure smooth scrolling polyfill imported
Update index.html:

Keep title: "RamaKrishna - Portfolio"
Ensure Poppins font loaded (add if not present)
Phase 5: Assets & Images
Profile Picture: Already in public/images/pic.png ✓
Logo: Already in public/images/rk-logo.avif ✓
Project Images: May need to add project screenshots if available
Organization Logos: Can use default or placeholder if unavailable
Phase 6: Testing & Verification
Functional Testing:

 Dev server starts: npm run dev runs without errors
 Page loads without console errors
 Loading screen displays for 1.2 seconds, then fades
 All sections visible: Navbar, Hero, Skills, Education, Projects, Footer
 Navbar scrolls smoothly, hides on scroll down
 Project carousel: prev/next buttons work, cards scroll smoothly
 All links clickable: GitHub, LinkedIn, project links
 Responsive design: mobile (480px), tablet (768px), desktop (1280px+)
 Mobile hamburger menu opens/closes
Visual Testing:

 Cyan/teal accent colors (#82E8EB) applied correctly
 Poppins font renders properly
 Gradients and shadows display correctly
 Lottie animations play smoothly
 Animations trigger on scroll (whileInView)
 Hover effects work on cards/buttons
Performance:

 Production build: npm run build completes without warnings/errors
 Bundle size reasonable (should be <200KB main JS)
Cross-browser:

 Test Chrome, Firefox, Safari (if available)
 Smooth scrolling works
 Animations perform well
Critical Files to Modify/Create
Existing (Modify):

d:\2porfolio\package.json - Add dependencies
d:\2porfolio\tailwind.config.js - Update colors/fonts
d:\2porfolio\src\index.css - Replace with reference CSS
d:\2porfolio\src\App.jsx - New structure with Framer Motion
d:\2porfolio\src\main.jsx - Add polyfill
New (Create):

d:\2porfolio\src\style.js - Layout/spacing utilities
d:\2porfolio\src\constants\index.js - All portfolio data
d:\2porfolio\src\components* - All new components
d:\2porfolio\src\lotties*.json - Animation files
Reference Files to Use
/tmp/personal-portfolio/src/App.jsx - App structure
/tmp/personal-portfolio/tailwind.config.cjs - Tailwind config
/tmp/personal-portfolio/src/index.css - CSS with gradients
/tmp/personal-portfolio/src/style.js - Layout utilities
/tmp/personal-portfolio/src/constants/index.js - Data structure template
/tmp/personal-portfolio/src/components/ - All component implementations
Data Preservation
From Old Portfolio (MyPortfolio/index.html & script.js):

User name: RamaKrishna Bootla
Title: B.Tech CSE(AIML) Student • Full Stack & AI Developer
Email: bootlaramakrsihna0@gmail.com
Phone: +91 96031 25954
Location: Hyderabad, Telangana, India
GitHub: Ramakrishnabootla
LinkedIn: ramakrishna-bootla-7ba1b5338
Projects: 6 projects (chatbot, attendance, Summer of AI, WhatsApp bot, newsletter, form automation)
Education: 4 entries (B.Tech CMR, Diploma Jyothishmathi, School ST. VINCENT, Courses)
Implementation Order
Update dependencies (package.json, npm install)
Update configs (tailwind, CSS, style.js)
Create constants with data
Create components (start with Navbar, Hero, then others)
Rewrite App.jsx with Framer Motion
Copy Lottie files
Test and fix issues
Build and verify
Commit changes
Estimated Effort
Configuration: 30 min
Component Rewrite: 2-3 hours
Testing & Fixes: 45 min - 1 hour
Total: 3.5-4.5 hours
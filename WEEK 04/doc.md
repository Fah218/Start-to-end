# Project Documentation

## 1. Project Overview and Objectives
This project is a modern, responsive E-commerce Product Landing Page designed to showcase various products and services. The primary objectives are:
- To build a fully functional, multi-page frontend website (Home, About, Services, Contact).
- To create a visually stunning user interface using premium modern design patterns like Glassmorphism and dark themes.
- To implement dynamic content generation and state management (e.g., cart functionality) using pure Vanilla JavaScript, without relying on heavy external frontend frameworks.

## 2. Setup and Installation Instructions
Running this project is highly straightforward since it uses native web technologies:
1. **Download/Clone the Repository:** Ensure you have the entire `WEEK 04` project folder on your local machine.
2. **No Build Tools Required:** There is no need to install Node.js, npm packages, or any bundlers.
3. **Run the Application:** Simply double-click the `index.html` file to open it in any modern web browser (Google Chrome, Mozilla Firefox, Safari, or Microsoft Edge).
4. **Navigation:** Use the navigation bar at the top of the page to seamlessly switch between the Home, About, Services, and Contact pages.

## 3. Code Structure Explanation
The project is built with a clean, organized, and modular file structure:
```text
WEEK 04/
├── index.html        # The main landing page displaying the hero section and dynamic product grid.
├── about.html        # Page detailing the company's background and mission.
├── services.html     # Page showcasing the various services offered.
├── contact.html      # Page containing a responsive contact form for user inquiries.
├── css/
│   └── style.css     # Contains all the custom, framework-free CSS styling for the entire website.
├── js/
│   └── script.js     # Vanilla JavaScript file handling dynamic product loading, interactions, and cart state.
└── images/           # Directory designated for storing local image assets used across the pages.
```

## 4. Screenshots of Working Application
*(Note: Replace the placeholder links below with actual paths to your screenshots once you capture them)*

- **Home Page:**
  ![Home Page Screenshot](./images/home-screenshot.png) *(Placeholder)*
- **About Page:**
  ![About Page Screenshot](./images/about-screenshot.png) *(Placeholder)*
- **Services Page:**
  ![Services Page Screenshot](./images/services-screenshot.png) *(Placeholder)*
- **Contact Page:**
  ![Contact Page Screenshot](./images/contact-screenshot.png) *(Placeholder)*

## 5. How Technical Requirements Were Met
Here is a simple, point-wise explanation of how the project's technical goals were achieved:
- **HTML Structure:** Used semantic HTML5 tags across 4 separate HTML files (`index.html`, `about.html`, `services.html`, `contact.html`) to ensure clean and accessible markup.
- **Custom Styling (Vanilla CSS):** Created a premium visual experience from scratch in `style.css` without using frameworks like Bootstrap or Tailwind, giving complete control over the UI.
- **Responsive Design:** Implemented CSS media queries to ensure the website layout adapts perfectly to both desktop and mobile screens.
- **Dynamic JavaScript Generation:** Handled the product showcase on the homepage dynamically via `script.js`. Instead of hardcoding HTML arrays, JS natively injects the product cards into the DOM.
- **Client-Side State Management:** Utilized the Browser's Local Storage to save the user's cart state so that item counts persist even if the page is reloaded.
- **Zero External Dependencies:** Successfully built a fast, interactive e-commerce template relying entirely on native web capabilities, making the project exceptionally lightweight and fast to load.

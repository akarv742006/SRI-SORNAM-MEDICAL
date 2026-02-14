# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).
🚀 Professional Pharmacy/Medical Web Solution Setup Guide
This project is a high-performance, mobile-first React application designed for pharmacies and medical stores. It features a searchable medicine catalog and a WhatsApp-integrated ordering system.

🛠 Tech Stack
Frontend: React 19
Build Tool: Vite
Styling: Vanilla CSS (Mobile-First)
Deployment: Optimized for GitHub Pages or any static hosting (Netlify, Vercel)
🏗 Initialization & Setup
To get the project running locally:

Prerequisites: Ensure you have Node.js installed.
Install Dependencies:
bash
npm install
Run Development Server:
bash
npm run dev
The site will be available at http://localhost:5173.
🎨 White-Labeling (How to Customize for Other Sites)
To sell this to a new client, you only need to update these specific areas:

1. Store Business Details
Update the name, contact numbers, and address in these components:

src/components/Navbar.jsx
 (Logo and Top Bar info)
src/components/Hero.jsx
 (Welcome text)
src/components/Footer.jsx
 (Copyright and Contact info)
2. WhatsApp Integration
To ensure orders go to the correct store, update the phone number in:

src/components/OrderForm.jsx
src/components/FloatingCallButton.jsx
3. Updating the Medicine Catalog
The entire database of medicines is located in:

src/data/medicines.js
 Simply edit this file to add or remove products. The search and categories will update automatically.
4. Branding & Colors
To change the brand colors (e.g., from Blue to Green), edit the CSS variables in:

src/index.css
📦 Deployment
When the project is ready to go live:

Build the project:
bash
npm run build
Upload: Upload the contents of the dist folder to your web server.
GitHub Pages: If using GitHub, run:
bash
npm run deploy
## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

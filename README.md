# Abdul Rahman M - Full Stack Developer Portfolio 🚀

Welcome to the open-source repository of my interactive portfolio website! This project is a highly dynamic, animated, and 3D-integrated showcase built to demonstrate modern web development techniques.

## ✨ Key Features

- **Dynamic Theme Toggle:** Seamless switching between Light and Dark themes, with state persistence via Local Storage.
- **Interactive 3D Tech Stack:** A physics-based interactive 3D scene built with Three.js, React Three Fiber, and Rapier Physics.
- **Smooth Animations:** Cinematic text reveals and buttery-smooth page scrolling powered by GSAP and ScrollSmoother.
- **Data-Driven Content:** Project details and content are dynamically fetched from Markdown files.
- **Fully Responsive:** Optimized for desktop, tablet, and mobile viewing.

## 🛠️ Technology Stack

- **Framework:** React (TypeScript) + Vite
- **3D & WebGL:** Three.js, React Three Fiber, React Three Postprocessing, React Three Rapier
- **Animations:** GSAP (ScrollSmoother, SplitText, ScrollTrigger)
- **Styling:** Vanilla CSS (Custom Variables, Flexbox, CSS Grid)

---

## 💻 Step-by-Step Setup Instructions

Want to run this portfolio locally on your machine? Follow these simple steps:

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) (v16 or higher) installed on your system.

### 2. Clone the Repository
Open your terminal and clone this repository:
```bash
git clone https://github.com/Ar141204/portfolio.git
cd portfolio
```

### 3. Install Dependencies
Install all the required NPM packages using:
```bash
npm install
```

### 4. Start the Development Server
Run the local Vite development server:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173/` to view the live site.

### 5. Build for Production
When you're ready to deploy, run:
```bash
npm run build
```
This will generate optimized, minified files in the `/dist` directory.

---

## ⚠️ Important Note Regarding GSAP Plugins

> **WARNING:** This project utilizes GSAP "Club" plugins (such as `ScrollSmoother` and `SplitText`). 
> 
> The repository currently uses the **Trial versions** (`gsap-trial`) of these plugins to allow local development. However, **trial plugins cannot be hosted/deployed to production environments (like Vercel, Netlify, or GitHub Pages)**—they will result in an error on live domains.
> 
> If you wish to host this portfolio on a live domain, you must either:
> 1. Purchase a [GSAP Premium Membership](https://gsap.com/pricing/) and install the licensed plugins.
> 2. Refactor the animation code to use free alternatives (e.g., standard CSS animations or free libraries like Framer Motion).

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

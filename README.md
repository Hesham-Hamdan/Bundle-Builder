# E-Commerce Security Bundle Builder

[🚀 View Live Demo on Vercel](https://bundlebuilder-jet.vercel.app/)

A responsive, data-driven security bundle builder prototype built with React, Tailwind CSS, and Context API.

---

## 🚀 Quick Start

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/Hesham-Hamdan/Bundle-Builder.git

# 2. Navigate to the project directory
cd Bundle-Builder

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

## 🛠️ Key Architectural Decisions & Features

- **Component Modularity:** The UI is strictly separated into reusable components (like ProductCard and AccordionSection) and major layouts to ensure a clean, maintainable codebase.
- **Data-Driven Architecture:** Catalog items and initial bundle states are loaded dynamically from data.json.
- **Centralized State Management:** React Context API (BundleContext) manages live total calculations, quantity adjustments, and localStorage persistence.
- **Responsive Design Strategy:** Built with full mobile-to-desktop fluid responsiveness, including custom height-based CSS media queries to match exact Figma specifications.
- **Typography:** Global integration of custom Gilroy font weights via @font-face definitions in Tailwind CSS.

## ⚖️ Tradeoffs & Future Enhancements

- **Client-Side Persistence:** Used localStorage for system saving instead of a full backend API to keep the build lightweight and client-focused.

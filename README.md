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
git clone [https://github.com/Hesham-Hamdan/Bundle-Builder.git](https://github.com/Hesham-Hamdan/Bundle-Builder.git)

# 2. Navigate to the project directory
cd your-repo-name

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

## 🛠️ Key Architectural Decisions & Features

- **Data-Driven Architecture:** Catalog items and initial bundle states are loaded dynamically from data.json.
- **Centralized State Management:** React Context API (BundleContext) manages live total calculations, quantity adjustments, and localStorage persistence.
- **Typography:** Global integration of custom Gilroy font weights via @font-face definitions in Tailwind CSS.

## ⚖️ Tradeoffs & Future Enhancements

- **Client-Side Persistence:** Used localStorage for system saving instead of a full backend API to keep the build lightweight and client-focused.

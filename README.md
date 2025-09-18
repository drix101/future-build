
# 🏗️ FUTUREBUILD Construction Website

A modern, responsive construction company website built with React, TypeScript, and cutting-edge web technologies. Features stunning animations, professional design, and optimized user experience.

![FUTUREBUILD Construction](https://img.shields.io/badge/FUTUREBUILD-Construction-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7.1.6-646CFF?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

### 🎨 Modern Design
- **Gradient Backgrounds**: Eye-catching gradient overlays and backgrounds
- **Professional Typography**: Clean, modern font choices with proper hierarchy
- **Consistent Branding**: Unified color scheme and design language throughout
- **Responsive Layout**: Optimized for all device sizes (mobile, tablet, desktop)

### 🚀 Advanced Animations
- **Framer Motion Integration**: Smooth, performant animations
- **Scroll-triggered Animations**: Elements animate as they come into view
- **Hover Effects**: Interactive hover states for enhanced user engagement
- **Staggered Animations**: Sequential animation timing for visual appeal

### 🏢 Business Sections
- **Hero Section**: Compelling introduction with call-to-action
- **Services**: Comprehensive construction services showcase
- **Projects**: Portfolio of completed construction projects
- **About Us**: Company information and values
- **Testimonials**: Client reviews and feedback
- **Contact**: Multiple contact methods and business information

### 🛠️ Technical Features
- **TypeScript**: Type-safe development with enhanced IDE support
- **Component Architecture**: Modular, reusable React components
- **Modern CSS**: Tailwind CSS for rapid styling
- **Performance Optimized**: Fast loading and smooth interactions
- **SEO Ready**: Semantic HTML structure for search engine optimization

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd future-build
   ```
   npm install
   ```
   npm run dev

## 🏗️ Project Structure

 
future-build/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── TopInfoBar.tsx    # Top contact information bar
│   │   ├── Header.tsx        # Navigation header with logo
│   │   ├── HeroSection.tsx   # Main hero section
│   │   ├── ServicesSection.tsx # Services showcase
│   │   ├── ProjectsSection.tsx # Projects portfolio
│   │   ├── AboutSection.tsx    # About company section
│   │   ├── TestimonialsSection.tsx # Client testimonials
│   │   ├── ContactSection.tsx  # Contact information
│   │   └── Footer.tsx        # Footer with links and info
│   ├── utils/
│   │   └── motionVariants.ts # Framer Motion animation variants
│   ├── App.tsx            # Main application component
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles
├── tailwind.config.js    # Tailwind CSS configuration
├── vite.config.ts       # Vite build configuration
└── package.json         # Project dependencies and scripts
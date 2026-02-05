# Therapy Site - Professional Mental Health Practice Website

A modern, responsive therapy practice website designed for mental health professionals specializing in anxiety, trauma, and burnout treatment. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS.

## 🌟 Overview

This is a professional therapy practice website featuring a warm, elegant design tailored for high-achieving adults seeking mental health support. The site showcases therapy services, professional credentials, and provides easy contact options for potential clients in Santa Monica.

### Target Audience
- High-achieving adults dealing with anxiety and stress
- Professionals experiencing burnout and perfectionism
- Individuals seeking trauma therapy and EMDR treatment
- Anyone looking for a safe, supportive therapeutic environment

## ✨ Features

### Core Sections
- **Hero Section**: Eye-catching landing with compelling call-to-action
- **About**: Introduction to the therapist's warm, collaborative approach
- **Services/Specialties**:
  - Anxiety Therapy - Tools for managing panic and overthinking
  - Trauma & EMDR - Safe processing of past experiences
  - Burnout & Perfectionism - Support for high-achievers
- **Support Section**: Details on common client struggles and treatment approach
- **Contact Form**: Easy scheduling for free consultations
- **Office Information**: Location and logistics
- **FAQ**: Common questions about therapy services
- **Professional Background**: Education, licensure, and specialized training
- **Call-to-Action**: Multiple touchpoints for engagement

### Technical Features
- ⚡ Server-side rendering with Next.js 16
- 🎨 Modern UI with Tailwind CSS v4
- 🎭 Smooth animations with FadeIn components
- 📱 Fully responsive design (mobile, tablet, desktop)
- ♿ Accessibility-focused components
- 🖼️ Optimized image loading with Next.js Image
- 🎯 SEO-friendly structure
- 🔧 TypeScript for type safety
- 📊 Component-based architecture

## 🛠️ Technology Stack

- **Framework**: [Next.js 16.1.6](https://nextjs.org) (React 19.2.3)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4
- **Fonts**: Cormorant Garamond, Plus Jakarta Sans
- **Utilities**: 
  - `clsx` - Conditional className handling
  - `tailwind-merge` - Merging Tailwind classes
- **Development**: 
  - ESLint 9 with Next.js config
  - PostCSS with Tailwind

## 📦 Installation

### Prerequisites
- Node.js 20.x or higher
- npm, yarn, pnpm, or bun

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd therapy-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the site

## 🚀 Available Scripts

- `npm run dev` - Start development server on port 3000
- `npm run build` - Build the production application
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality checks

## 📁 Project Structure

```
therapy-site/
├── app/
│   ├── globals.css          # Global styles and Tailwind directives
│   ├── layout.tsx           # Root layout with metadata and fonts
│   ├── page.tsx             # Main homepage component
│   └── favicon.ico          # Site favicon
├── components/
│   ├── layout/              # Layout components
│   │   ├── Navbar.tsx       # Navigation bar
│   │   └── Footer.tsx       # Site footer
│   ├── sections/            # Page sections
│   │   ├── Hero.tsx         # Hero/banner section
│   │   ├── About.tsx        # About the therapist
│   │   ├── Services.tsx     # Therapy specialties
│   │   ├── Support.tsx      # Support information
│   │   ├── Contact.tsx      # Contact form
│   │   ├── Office.tsx       # Office location info
│   │   ├── FAQ.tsx          # Frequently asked questions
│   │   ├── ProfessionalBackground.tsx  # Credentials
│   │   └── CTA.tsx          # Call-to-action section
│   └── ui/                  # Reusable UI components
│       ├── Button.tsx       # Button component
│       ├── Card.tsx         # Card component
│       ├── Accordion.tsx    # Accordion component
│       └── FadeIn.tsx       # Animation wrapper
├── public/
│   └── images2/             # Site images and assets
├── lib/                     # Utility functions
├── package.json             # Project dependencies
├── tsconfig.json            # TypeScript configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── next.config.ts           # Next.js configuration
├── eslint.config.mjs        # ESLint configuration
└── postcss.config.mjs       # PostCSS configuration
```

## 🎨 Design System

### Colors
- **Primary**: Text and main content
- **Background**: Main background color
- **Background Light**: Alternate section backgrounds
- **Accent**: Highlighted sections (lavender tones)

### Typography
- **Headings**: Cormorant Garamond (elegant serif)
- **Body**: Plus Jakarta Sans (modern sans-serif)

### Components
- Reusable Button component with variants
- Responsive Card layouts
- Interactive Accordion for FAQ/credentials
- Smooth FadeIn animations for progressive disclosure

## 🌐 Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy this Next.js application:

1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com/new)
3. Vercel will automatically detect Next.js and configure the build
4. Your site will be live with automatic deployments on every push

For detailed deployment instructions, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

### Other Deployment Options
- **Netlify**: Supports Next.js with automatic deployments
- **AWS Amplify**: Full-stack deployment with AWS integration
- **Docker**: Containerize the application for any platform
- **Self-hosted**: Build and run on your own server

## 🔧 Customization

### Updating Content
1. **Site Metadata**: Edit `app/layout.tsx` to update title and description
2. **Hero Section**: Modify props in `app/page.tsx`
3. **Services**: Update the `specialties` array in `components/sections/Services.tsx`
4. **Professional Info**: Edit content in `components/sections/ProfessionalBackground.tsx`

### Adding Images
Place images in the `public/images2/` directory and reference them with `/images2/filename.ext`

### Styling Changes
- Global styles: `app/globals.css`
- Tailwind configuration: `tailwind.config.ts`
- Component-specific styles: Use Tailwind utility classes

## 📄 License

This project is private and proprietary.

## 🤝 Contributing

This is a private project. For questions or support, please contact the repository owner.

## 📞 Support

For issues or questions about this codebase, please open an issue in the repository or contact the development team.

---

Built with ❤️ using Next.js and modern web technologies

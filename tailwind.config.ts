import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#085444",
        secondary: "#223614",
        accent: "#4f3405",
        background: "#c1c1c1",
        foreground: "#223614",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-cormorant)", "Plus Jakarta Sans", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;

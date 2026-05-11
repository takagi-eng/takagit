import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f7f8fa",
          100: "#e6ebf0",
          300: "#9ca8b5",
          500: "#5b6674",
          700: "#202a36",
          900: "#05070a"
        },
        azure: {
          100: "#dff8ff",
          300: "#84dfff",
          500: "#22b7d6",
          700: "#0f6f87",
          900: "#082b3a"
        },
        silver: "#c8d0d8",
        night: "#020407"
      },
      fontFamily: {
        sans: ["Geist", "Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        display: ["Geist", "Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        serif: ["Noto Serif JP", "Yu Mincho", "Hiragino Mincho ProN", "ui-serif", "serif"],
        mono: ["JetBrains Mono", "SFMono-Regular", "ui-monospace", "monospace"]
      },
      backgroundImage: {
        "noise-soft": "url('/noise.svg')",
        "radial-hero": "radial-gradient(circle at 50% 22%, rgba(132, 223, 255, 0.20), transparent 34%), radial-gradient(circle at 72% 12%, rgba(255,255,255,0.22), transparent 22%), linear-gradient(180deg, #020407 0%, #07111a 44%, #f7f8fa 100%)"
      },
      boxShadow: {
        glow: "0 0 70px rgba(34, 183, 214, 0.28)",
        editorial: "0 28px 90px -50px rgba(2, 4, 7, 0.6)"
      }
    }
  },
  plugins: []
};

export default config;

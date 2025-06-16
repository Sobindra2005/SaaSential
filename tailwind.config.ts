import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary:"#030014",
        secondary :"#B6B2FF",
        border:"#525f7f"
      },
    },
  },
  plugins: [],
} satisfies Config;

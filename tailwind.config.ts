import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        mainColor: "#f84f39",
        proColor: "#6b66da",
        'custom-red': '#f84f39',
        titleColor: '#8e8da0',
      },
      borderWidth: {
        5:'5px',
      },
      spacing: {
        15:'15px',
        30:'30px',
      }
    },
  },
  plugins: [],
} satisfies Config;

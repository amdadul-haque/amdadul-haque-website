import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        heading: ["Bebas Neue", 'sans-serif'],
        body: ["Manrope", 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "white-c7": "#c7c7c7",
        primary: "#D3E97A",
      },
    },
  },
  plugins: [],
};
export default config;

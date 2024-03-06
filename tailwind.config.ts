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
        const: "var(--const)",
        text: "var(--text)",
      },
      screens: {
        max500: {
          max: "500px",
        },
      },
    },
  },
  plugins: [],
};
export default config;

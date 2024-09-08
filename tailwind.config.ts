import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/app/pages/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        dark: {
          bg: '#1f2937',
          text: '#ffffff',
        },
        light: {
          bg: '#f9fafb',
          text: '#000000',
        },
        colors : {

        }
    },
  },
  plugins: [],
};
export default config;

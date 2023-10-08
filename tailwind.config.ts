import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    colors: {
      accent: "#EE534F",
      primary: "#4D4141",
      secondary: "#fd7d96",
      white: "#ffffff"
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    colors: {
      accent: "#011221",
      accent_color: "#E99287",
      primary: "#1E2D3D",
      secondary: "#fd7d96",
      white: "#ffffff"
    },
  },
  plugins: [],
};
export default config;

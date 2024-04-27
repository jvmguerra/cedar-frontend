import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "cedar-blue": "#012D67",
        "cedar-orange": "#FA6B54",
        "gray": "#65657B",
        "primary": "#3667E9",
        "error": "#C34648"
      },
      fontFamily: {
        'arial': ['Arial', 'system-ui'],
        'circular': ['CircularXX', 'system-ui']
      }
    },
  },
  plugins: [],
};
export default config;

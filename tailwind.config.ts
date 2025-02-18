import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     
    },
    colors: {
      'lightgrey': '#F9F9F9',
      'darkblue': '#20888F',
      'orangelight': '#F47733',
      'darkblack': '#303030',
      'mediumblack': '#212121',
      'white': '#ffffff',
      'redlight': '#FF88C6',
     'lightgray':'#A4A4A4',
      'darkgray': '#4E4E4E',
      'blacks': '#000000',
      'lightergray': '#C9C9C9',
      'lightergrey': 'rgba(233, 233, 233, 0.3)',
      'greyys': '#8E8E8E'


    }
  },
  plugins: [],
};
export default config;

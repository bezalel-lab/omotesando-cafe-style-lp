import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/globals.css;',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'japanese-font': ['Noto Sans JP', 'sans-serif'],
        // Adobe Fontsから読み込んだフォントを追加
        'english-font': [
          'reross-quadratic',
          'Satisfy',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
        'satisfy-font': [
          'Satisfy',
          'reross-quadratic',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
      colors: {
        dark: '#333',
        light: '#FFF',
        baseColor: '#2F2F2F',
        main: '#F2F2F2',
        accent: '#159741',
        button: '#f2f2f2',
        submit: '#169741',
        disabled: '#BDBDBD',
      },
      boxShadow: {
        'accent-glow': 'inset 0 0 5px rgba(21, 151, 65, 0.4), 0 0 7px rgba(21, 151, 65, 0.3)',
      },
      scale: {
        115: '1.15',
        120: '1.20',
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;

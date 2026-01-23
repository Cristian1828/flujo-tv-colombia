/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFDE00',    // Amarillo vibrante
        secondary: '#E60000',  // Rojo intenso
        dark: '#000000',
        light: '#FFFFFF',
      },
      fontFamily: {
        display: ['Courier New', 'monospace'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

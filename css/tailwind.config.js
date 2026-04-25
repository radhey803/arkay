/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../index.html", "../js/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: '#8B4513',
        secondary: '#D2691E',
        accent: '#FFD700',
        dark: '#2C1810',
        light: '#F5F5DC',
        text: '#333333',
        'light-gray': '#F8F9FA',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '8px',
        lg: '16px',
      },
      boxShadow: {
        sm: '0 4px 14px rgba(0, 0, 0, 0.06)',
        md: '0 12px 30px rgba(0, 0, 0, 0.12)',
        lg: '0 18px 50px rgba(0, 0, 0, 0.18)',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00040f',
        secondary: '#82E8EB',
        dimWhite: 'rgba(255, 255, 255, 0.72)',
        dimBlue: 'rgba(9, 151, 124, 0.12)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(0, 246, 255, 0.18), transparent 45%)',
      },
      boxShadow: {
        glow: '0 30px 90px rgba(0, 246, 255, 0.14)',
      },
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px',
    },
  },
  plugins: [],
}

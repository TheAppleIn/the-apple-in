/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#F36C00',
          'orange-hover': '#E05F00',
          'orange-light': '#FFF5EB',
          dark: '#111111',
          'dark-card': '#181818',
          'dark-soft': '#222222',
          light: '#F7F7F5',
          'light-card': '#FFFFFF',
          border: '#E5E5E2',
          muted: '#666666'
        }
      },
      fontFamily: {
        sans: ['Inter', 'DM Sans', 'sans-serif'],
        display: ['Manrope', 'Poppins', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'premium': '0 12px 36px -4px rgba(0, 0, 0, 0.08)',
        'floating': '0 20px 48px -8px rgba(243, 108, 0, 0.18)',
      }
    },
  },
  plugins: [],
}

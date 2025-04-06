/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBeige: '#F7F1EA',
        customGreen: '#29A841',
        customBrown : '#976C3A',
        customGray : '#F5F5F5'
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(150deg, rgba(171, 46, 106, .8) 0%, rgba(157, 39, 96, .8) 44%, rgba(88, 24, 99, .8) 80%)',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide', "@tailwindcss/forms"),
  ],
}


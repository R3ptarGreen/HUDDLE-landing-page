/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        pink: 'hsl(322, 100%, 66%)',
        pinkHover: 'hsl(322, 100%, 80%)',
        paleCyan: 'hsl(193, 100%, 96%)',
        darkCyan: 'hsl(192, 100%, 9%)',
        grayishBlue: 'hsl(208, 11%, 55%)',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        normal: 400,
        bold: 700,
        semiBold: 600,
      },
      fontSize: {
        base: '1.125rem',
      },
      maxWidth: {
        logoMobileX: '10rem',
        logoDesktopX: '15rem',
      },
      maxHeight: {
        logoMobileY: '1.25rem'
      },
      boxShadow :{
        cardShadow: '0rem 0.1875rem 0.675rem 0rem rgba(0,0,0,0.125)'
      }
    },
  },
  plugins: [],
}


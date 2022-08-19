/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'red-menu' : '#F44336',
        'red-hr' : '#FF0000',
        'gray-hover' : '#CCC',
        'gray-ul-backg' : '#F1F1F1',
        'gray-li-head' : '#616161',
        'gray-li-bottom' : '#DDD'
      },
      spacing:{
        '12.5': '60px'
      }
    },
    screens: {
      'sm': '601px',
      'lg': '993px'
    },
    borderRadius:{
      'md' : '4px'
    },
    borderWidth: {
      DEFAULT: '1px',
      '5': '5px',
    }
  },
  plugins: [],
}

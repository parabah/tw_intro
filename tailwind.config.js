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
      borderRadius:{
        'md' : '4px'
      },
      borderWidth: {
        '5': '5px',
      },
      spacing: {
        '5.5' : '22px',
        '12.5': '60px',
      },
      lineHeight: {
        '6.5' : '27px',
        '8.5' : '33px',
        '18' : '72px'
      },
      fontSize: {
        'xl' : '22px',
        '6xl' : '64px'
      }
    },
    screens: {
      'sm': '601px',
      'lg': '993px'
    }
  },
  plugins: [],
}

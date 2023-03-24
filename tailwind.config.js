/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      'poppins': ['Poppins']
    },
    extend: {
      backgroundImage: {
        'tay': 'url(~/images/taylorswift.gif)',
        'bd': 'url(~/images/beabadoobieeee.gif)',
        'intosp': 'url(~/images/intosp.gif)',
      },
      colors: {
        'brightBlue': '#85aed0',
        'brightBlueLight': '#bdc6d9',
        'brightBlueLighter':'#e3e7f1',
        'brightBlueDark': '#7391c8',
        'brightBlueDarker':'#52688f',
        'brightBlueDarkest': '#38609b',
      }
    },
  },
  plugins: [],
}

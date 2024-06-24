/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        raleway: 'Raleway',
        mons: 'Montserrat Alternates',
        tour: 'Autour One'
      },
      borderRadius: {
        'custom-left': '1rem',  // Medium rounded corner
        'custom-right': '9999px',
        'custom-second-left': '0.5rem', // Slightly rounded corner for second image
        'custom-second-right': '50%',  // Fully rounded corner
      },
      keyframes: {
        fadeInOut: {
          '0%, 100%': { opacity: 0 },
          '50%': { opacity: 1 },
        },
      },
      animation: {
        fadeInOut: 'fadeInOut 5.7s ease-in-out infinite',
      },
    },
  },
  plugins: [ // Use a comma here instead of a semicolon
    function ({ addUtilities }) {
      addUtilities({
        '.rounded-lr-custom': {
          'border-top-left-radius': '250px',
          'border-bottom-left-radius': '400px',
          'border-top-right-radius': '500px',
          'border-bottom-right-radius': '250px',
        },
        '.rounded-lr-custom-second': {
          'border-top-left-radius': '500px',
          'border-bottom-left-radius': '400px',
          'border-top-right-radius': '250px',
          'border-bottom-right-radius': '400px',
        },
      });
    },
  ],
};




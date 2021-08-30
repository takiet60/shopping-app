const plugin = require('tailwindcss/plugin')


module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: { },
  },
  variants: {
    extend: { },
  },
  plugins: [
    require('tailwindcss-pseudo-elements'),
    plugin(({ addUtilities }) => {
      const newUtilities = {
        ".left-line": {
          content: "''",
          display: "block",
          width: "130px",
          height: "1px",
          "position": "absolute",
          left: 0,
          top: "50%",
          "background-color": "black"
        },
        ".right-line": {
          content: "''",
          display: "block",
          width: "130px",
          height: "1px",
          "position": "absolute",
          right: 0,
          top: "50%",
          "background-color": "black"
        }
      }
      addUtilities(newUtilities, {
        variants: ["before", "after"],
      });
    })
  ],
}

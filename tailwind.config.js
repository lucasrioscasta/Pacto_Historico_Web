/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./css/**/*.css"],
  theme: {
    extend: {
      colors: {
        phYellow: '#F3B229',
        phPink: '#E83E8C',
        phPurple: '#7B2CBF',
        phBlue: '#0077B6',
        phGreen: '#2A9D8F',
        phDark: '#1E1B2E',
      },
    },
  },
  plugins: [],
}


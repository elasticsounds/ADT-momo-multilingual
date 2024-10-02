/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',           // Looks at HTML files in the root folder
    './assets/**/*.html',  // Looks at HTML files in the "assets" folder
    './assets/**/*.js',    // Looks at JS files in the "assets" folder
],
  theme: {
    extend: {},
  },
  plugins: [],
}


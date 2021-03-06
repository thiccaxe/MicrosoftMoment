/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    ".src/**/*.{js,html}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: "class"
    }),
  ],
}

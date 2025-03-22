// tailwind.config.js
module.exports = {
  content: [
    "./index.html", // scan index.html in the project root
    "./*.html", // or all HTML files in the root, if you have more
    "./*.js", // add JS files in the root if they include Tailwind classes
  ],
  theme: {
    extend: {
      // your custom theme settings here
    },
  },
  plugins: [],
};

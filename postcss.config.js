const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    require("postcss-import")(),
    require("tailwindcss"),
    require("autoprefixer"),
    // Only purge css on production
    purgecss({
      content: ["./**/*.html", "./src/**/*.svelte"],
      defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
    })
  ]
};

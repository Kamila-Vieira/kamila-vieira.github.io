export default {
  inputDir: "./public/assets/icons",
  outputDir: "./public/fonts/fantasticon",
  fontTypes: ["ttf", "woff", "woff2"],
  assetTypes: ["scss"],
  fontsUrl: "../fonts/fantasticon",
  prefix: "fantasticon",
  fontHeight: 60,
  templates: {
    scss: "./icons.template.hbs",
  },
  tag: "*",
  pathOptions: {
    scss: "./src/styles/base/_icons.scss",
  },
};

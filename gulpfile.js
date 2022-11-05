import gulp from "gulp";
import gulpSass from "gulp-sass";
import nodeSass from "node-sass";
import dartSass from "sass";
import postCss from "gulp-postcss";
import concat from "gulp-concat";
import webpack from "webpack-stream";
import webpackConfig from "./webpack.config.js";
import sourcemaps from "gulp-sourcemaps";
import autoprefixer from "autoprefixer";
import browserSync from "browser-sync";
import { generateFonts } from "fantasticon";
import fantasticonConfig from "./fantasticon.config.js";

const sass = gulpSass(dartSass);
sass.compiler = nodeSass;
const developEnvironment = process.env.NODE_ENV === "development";
browserSync.create();

const compileScripts = () => {
  return gulp
    .src(["./src/scripts/main.mjs"])
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest("./public/js"))
    .pipe(browserSync.stream({ match: "**/*.js" }));
};

const compileStyles = () => {
  return gulp
    .src(["./src/styles/main.scss"])
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: developEnvironment ? "expanded" : "compressed",
        sourceMap: true,
        sourceMapEmbed: !developEnvironment,
      })
    )
    .pipe(concat(developEnvironment ? "style.css" : "style.min.css"))
    .pipe(postCss([autoprefixer()]))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./public/css"))
    .pipe(browserSync.stream({ match: "**/*.css" }));
};

const compileAssets = () => {
  return generateFonts(fantasticonConfig)
    .then(() => console.log("Fonts generated successfully!"))
    .catch(() => console.log("Font icons was't generated!"))
    .finally(() => {
      compileScripts();
      compileStyles();
    });
};

const watchAssetsChange = () => {
  gulp.watch("./src/scripts/**/*.mjs", compileScripts);
  gulp.watch("./src/styles/**/*.scss", compileStyles);
  gulp.watch("./*.html").on("change", browserSync.reload);
};

const initServer = () => {
  return browserSync.init({
    server: {
      baseDir: "./",
    },
  });
};

gulp.task("build", gulp.parallel(compileAssets));
gulp.task("dev", gulp.parallel(compileAssets, initServer, watchAssetsChange));

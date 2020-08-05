const { src, dest, series, parallel } = require("gulp");
const htmlmin = require("gulp-htmlmin");
const minify = require("gulp-minify");
const cleanDir = require("gulp-clean-dir");
const cleanCSS = require("gulp-clean-css");
const critical = require("critical").stream;

function clean() {
  return src("dist").pipe(cleanDir("dist"));
}

function minifyHTML() {
  return src("src/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest("dist"));
}

function compressJS() {
  return src(["src/*.js"])
    .pipe(
      minify({
        ext: {
          min: ".js",
        },
        noSource: true,
      })
    )
    .pipe(dest("dist"));
}

function compressCSS() {
  return src("src/*.css")
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(dest("dist"));
}

function criticalGen() {
  return src("dist/*.html")
    .pipe(
      critical({
        base: "dist/",
        inline: true,
        css: ["dist/styles.css"],
      })
    )
    .on("error", (err) => {
      log.error(err.message);
    })
    .pipe(dest("dist"));
}

function copyFavicon() {
  return src("./src/favicon/*").pipe(dest("./dist/favicon"));
}

function copyManifest() {
  return src("./src/site.webmanifest").pipe(dest("./dist"));
}

exports.default = series(
  clean,
  parallel(minifyHTML, compressJS, compressCSS, copyFavicon, copyManifest),
  criticalGen
);

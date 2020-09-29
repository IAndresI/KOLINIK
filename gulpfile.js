"use strict";

let gulp = require("gulp"),
  sass = require("gulp-sass"),
  rename = require("gulp-rename"),
  browserSync = require("browser-sync"),
  autoPrefixer = require("gulp-autoprefixer"),
  concat = require("gulp-concat"),
  uglify = require("gulp-uglify"),
  babel = require("gulp-babel"),
  webpack = require("webpack-stream");


const scss = () => {
  return gulp
    .src("app/scss/style.scss")
    .pipe(sass({
      outputStyle: "compressed"
    }))
    .pipe(rename({
      suffix: ".min"
    }))
    .pipe(autoPrefixer({
      overrideBrowserslist: ["last 8 versions"]
    }))
    .pipe(gulp.dest("./app/css"))
    .pipe(browserSync.reload({
      stream: true
    }));
};

exports.scss = scss;

const html = () => {
  return gulp.src("./app/*.html").pipe(browserSync.reload({
    stream: true
  }));
}

exports.html = html;

const js = () => {
  return gulp.src("./app/js/*.js").pipe(browserSync.reload({
    stream: true
  }));
}

exports.js = js;

const watch = () => {
  gulp.watch("./app/scss/*.scss", gulp.parallel(scss));
  gulp.watch("./app/*.html", gulp.parallel(html));
  gulp.watch("./app/js/*.js", gulp.parallel(js));
}

exports.watch = watch;

const browserS = () => {
  browserSync.init({
    server: {
      baseDir: "./app",
    },
  });
}

exports.browserS = browserS;

const script = () => {

  return gulp
    .src(["app/js/main.js"])
    .pipe(concat("main.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("app/js"));
}

exports.script = script;

const style = () => {
  return gulp
    .src(["app/js/main.js"])
    .pipe(
      webpack({
        mode: "development",
        output: {
          filename: "index.js",
        },
      })
    )
    .pipe(concat("main.min.js"))
    .pipe(
      babel({
        presets: ["@babel/preset-env"],
      })
    )
    .pipe(uglify())
    .pipe(gulp.dest("./app/js"))
    .pipe(browserSync.reload({
      stream: true
    }));
}

exports.style = style;

gulp.task(
  "default",
  gulp.parallel(watch, browserS, scss, style, script)
);
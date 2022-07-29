/* const { src,dest} = require("gulp");

// Конфигурация
const path = require("../config/path.js");
const app = require("../config/app.js");

// Плагины
const plumber = require("gulp-plumber"); 
const notify = require("gulp-notify");
const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");
const webp = require("gulp-webp");*/
const gulpif = require("gulp-if");

// Обработка IMAGE
const img = () => {
    return $.gulp.src($.path.img.src) 
    .pipe($.gp.plumber({
        errorHandler: $.gp.notify.onError(error => ({
            title : "IMAGE",
            message: error.message
        }))
    }))
    .pipe($.gp.newer($.path.img.dest))
    .pipe($.gp.webp())
    .pipe($.gulp.dest($.path.img.dest))
    .pipe($.gulp.src($.path.img.src))
    .pipe($.gp.newer($.path.img.dest))
    .pipe(gulpif($.app.isProd,$.gp.imagemin($.app.imagemin)))
    .pipe($.gulp.dest($.path.img.dest));
}

module.exports = img;
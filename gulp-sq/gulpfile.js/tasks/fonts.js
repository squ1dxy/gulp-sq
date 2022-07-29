/* const { src,dest} = require("gulp");

// Конфигурация
const path = require("../config/path.js");
const app = require("../config/app.js");

// Плагины
const plumber = require("gulp-plumber"); 
const notify = require("gulp-notify");
const newer = require("gulp-newer");
const fonter = require("gulp-fonter");
const ttf2woff2 = require("gulp-ttf2woff2");
 */
// Обработка FONTS
const fonts = () => {
    return $.gulp.src($.path.fonts.src) 
    .pipe($.gp.plumber({
        errorHandler: $.gp.notify.onError(error => ({
            title : "Fonts",
            message: error.message
        }))
    }))
    .pipe($.gp.newer($.path.fonts.dest))
    .pipe($.gp.fonter($.app.fonter))
    .pipe($.gulp.dest($.path.fonts.dest))
    .pipe($.gp.ttf2woff2())
    .pipe($.gulp.dest($.path.fonts.dest));
}

module.exports = fonts;
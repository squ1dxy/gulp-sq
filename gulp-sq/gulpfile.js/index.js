global.$ = {
    // Пакеты
    gulp: require("gulp"),
    gp:require("gulp-load-plugins")(),
    browserSync: require("browser-sync").create(),

    // Конфигурация
    path: require("./config/path.js"),
    app: require("./config/app.js")
}
// Задачи
const server = require('./tasks/server.js');
const pug = require('./tasks/pug.js');
const scss = require('./tasks/scss.js');
const js = require('./tasks/js.js');
const img = require('./tasks/img.js');
const fonts = require('./tasks/fonts.js');

//Наблюдение
const watcher = () =>{
    $.gulp.watch($.path.pug.watch, pug).on('all', $.browserSync.reload);
    $.gulp.watch($.path.scss.watch, scss).on('all', $.browserSync.reload);
    $.gulp.watch($.path.js.watch, js).on('all', $.browserSync.reload);
    $.gulp.watch($.path.img.watch, img).on('all', $.browserSync.reload);
    $.gulp.watch($.path.fonts.watch, fonts).on('all', $.browserSync.reload);
}


const build = $.gulp.series(
        /* clear */
        $.gulp.parallel(pug,scss,js,img,fonts),
);
const dev = $.gulp.series(
    build,
    $.gulp.parallel(watcher,server)
);

/* Задачи */
exports.pug = pug;
exports.scss = scss;
exports.js = js;
exports.img = img;
exports.fonts = fonts;

//Сборка
exports.default = $.app.isProd
  ? build
  : dev ;
const isProd = process.argv.includes("--production");
const isDev = !isProd

module.exports = {
    isProd: isProd,
    isDev: isDev,

    htmlmin: {
        collapsewhitespace: isProd
    },
    pug: {
        pretty: isDev, //<--- отвечает за сжатия если труе не сжимает 
        data: {
            news : require('../data/news.json')
        }
    },

    webpack: {
        mode : isProd ? "production" : "development" /* <-- переводит в вебпак а если "production" то минифицирует */
    },

    imagemin: {
        verbose: true /* будем видеть размер до и после */
    },

    fonter: {
        formats:["ttf","woff","eot","svg"]
    }
}
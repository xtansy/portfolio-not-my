import pkg from "gulp";
const { watch, parallel, series, task } = pkg;
import bs from "browser-sync";
const browserSync = bs.create();

//===================================
// src создает файловый поток чтения
// pipe поток дальше
// dest создает поток записи
//===================================

import { html, clear, config, js, scss, img, fonts } from "./tasks/index.js";

const watcher = () => {
    watch(config.paths.html.watch, html).on("change", browserSync.reload);
    watch(config.paths.scss.watch, scss).on("change", browserSync.reload);
    watch(config.paths.js.watch, js).on("change", browserSync.reload);
    watch(config.paths.img.watch, img).on("change", browserSync.reload);
    watch(config.paths.fonts.watch, fonts).on("change", browserSync.reload);
};

const server = () => {
    return browserSync.init({
        server: {
            baseDir: config.paths.pathDest,
        },
    });
};

const build = series(clear, parallel(html, scss, js, img));

const dev = series(build, parallel(watcher, server));

task("default", config.isProd ? build : dev);

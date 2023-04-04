import pkg from "gulp";
const { src, dest } = pkg;
import plumber from "gulp-plumber";
import autoprefixer from "gulp-autoprefixer";
import csso from "gulp-csso";
import rename from "gulp-rename";
import shorthand from "gulp-shorthand";
import gcmq from "gulp-group-css-media-queries";

import gulpSass from "gulp-sass";
import compilSass from "sass";
const sass = gulpSass(compilSass);
import glob from "gulp-sass-glob";
import webpCss from "gulp-webp-css";

import { config } from "./index.js";

export const scss = () => {
    return src(config.paths.scss.root, config.plugins.sourcemaps)
        .pipe(plumber())
        .pipe(glob())
        .pipe(sass().on('error', sass.logError))
        .pipe(webpCss())
        .pipe(autoprefixer())
        .pipe(shorthand())
        .pipe(gcmq())
        .pipe(dest(config.paths.pathDest, config.plugins.sourcemaps))
        .pipe(rename({ suffix: ".min" }))
        .pipe(csso())
        .pipe(dest(config.paths.pathDest, config.plugins.sourcemaps));
};

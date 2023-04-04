import pkg from "gulp";
const { src, dest } = pkg;
import plumber from "gulp-plumber";
import newer from "gulp-newer";
import fonter from "gulp-fonter";
import ttf2woff2 from "gulp-ttf2woff2";

import { config } from "./index.js";

export const fonts = () => {
    return src(config.paths.fonts.root)
        .pipe(plumber())
        .pipe(newer(config.paths.fonts.dest))

        .pipe(fonter(config.plugins.fonter))
        .pipe(dest(config.paths.fonts.dest))

        .pipe(ttf2woff2())
        .pipe(dest(config.paths.fonts.dest));
};

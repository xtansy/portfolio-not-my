import pkg from "gulp";
const { src, dest } = pkg;
import plumber from "gulp-plumber";
import imagemin from "gulp-imagemin";
import newer from "gulp-newer";
import webp from "gulp-webp";

import { config } from "./index.js";

export const img = () => {
    return src(config.paths.img.root)
        .pipe(plumber())

        .pipe(newer(config.paths.img.dest))
        .pipe(webp())
        .pipe(dest(config.paths.img.dest))

        .pipe(src(config.paths.img.root))
        .pipe(newer(config.paths.img.dest))
        .pipe(imagemin())
        .pipe(dest(config.paths.img.dest));
};

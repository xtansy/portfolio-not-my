import pkg from "gulp";
const { src, dest } = pkg;
import plumber from "gulp-plumber";
import concut from "gulp-concat";
import autoprefixer from "gulp-autoprefixer";
import csso from "gulp-csso";
import rename from "gulp-rename";
import shorthand from "gulp-shorthand";
import size from "gulp-size";
import gcmq from "gulp-group-css-media-queries";

import { config } from "./index.js";

export const css = () => {
    return src(config.paths.css.root, config.plugins.sourcemaps)
        .pipe(plumber())
        .pipe(concut("main.css"))
        .pipe(autoprefixer())
        .pipe(shorthand())
        .pipe(gcmq())
        .pipe(size({ title: "CSS До сжатия" }))
        .pipe(dest(config.paths.pathDest, config.plugins.sourcemaps))
        .pipe(rename({ suffix: ".min" }))
        .pipe(csso())
        .pipe(size({ title: "CSS После сжатия" }))
        .pipe(dest(config.paths.pathDest, config.plugins.sourcemaps));
};

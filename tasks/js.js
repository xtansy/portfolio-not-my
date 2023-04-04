import pkg from "gulp";
const { src, dest } = pkg;
import plumber from "gulp-plumber";
import babel from "gulp-babel";
import webpack from "webpack-stream";
import { config } from "./index.js";

export const js = () => {
    return src(config.paths.js.root, config.plugins.sourcemaps)
        .pipe(plumber())
        .pipe(babel())
        .pipe(webpack(config.plugins.webpack))
        .pipe(dest(config.paths.pathDest, config.plugins.sourcemaps));
};

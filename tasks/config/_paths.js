const pathSrc = "./src";
const pathDest = "./public";

export const paths = {
    pathSrc,
    pathDest,

    html: {
        root: `${pathSrc}/html/index.html`,
        watch: `${pathSrc}/html/**/*.html`,
    },

    css: {
        root: `${pathSrc}/css/*.css`,
        watch: `${pathSrc}/css/**/*.css`,
    },

    scss: {
        root: `${pathSrc}/scss/*.scss`,
        watch: `${pathSrc}/scss/**/*.scss`,
    },

    js: {
        root: `${pathSrc}/js/*.js`,
        watch: `${pathSrc}/js/**/*.js`,
    },

    img: {
        root: `${pathSrc}/img/*.{png,jpg,jpeg,gif,svg}`,
        watch: `${pathSrc}/img/**/*.{png,jpg,jpeg,gif,svg}`,
        dest: `${pathDest}/img`,
    },

    fonts: {
        root: `${pathSrc}/fonts/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}`,
        watch: `${pathSrc}/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}`,
        dest: `${pathDest}/fonts`,
    },
};

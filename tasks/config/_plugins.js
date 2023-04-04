export const plugins = (isProd) => {
    return {
        htmlmin: {
            collapseWhitespace: isProd,
        },

        webpack: {
            mode: isProd ? "production" : "development",
        },

        sourcemaps: {
            sourcemaps: !isProd,
        },

        fonter: {
            formats: ["ttf", "woff"],
        },
    };
};

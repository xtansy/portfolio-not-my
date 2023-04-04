import { paths } from "./_paths.js";
import { plugins } from "./_plugins.js";

const isProd = process.argv.includes("--prod");

export const config = {
    isProd,
    paths,
    plugins: plugins(isProd),
};

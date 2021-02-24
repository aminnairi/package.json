import {resolve} from "path";
import {terser} from "rollup-plugin-terser";
import copy from "rollup-plugin-copy";
import postcss from "rollup-plugin-postcss";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import remove from "rollup-plugin-delete";
import babel from "@rollup/plugin-babel"

export default {
    input: resolve("sources", "index.mjs"),
    plugins: [
        remove({
            targets: [
                resolve("docs", "**", "*")
            ]
        }),
        copy({
            targets: [
                {
                    src: resolve("sources", "index.html"),
                    dest: resolve("docs")
                },
                {
                    src: resolve("sources", "images"),
                    dest: resolve("docs")
                },
                {
                    src: resolve("sources", "assets", "*"),
                    dest: resolve("docs")
                },
                {
                    src: resolve("sources", "LICENSE"),
                    dest: resolve("docs")
                }
            ]
        }),
        commonjs(),
        nodeResolve(),
        babel({
            babelHelpers: "bundled"
        }),
        postcss({
            plugins: [
                tailwindcss,
                autoprefixer,
                cssnano
            ],
            extract: "css/index.css"
        }),
        terser()
    ],
    output: {
        file: resolve("docs", "index.js"),
        format: "iife"
    }
};
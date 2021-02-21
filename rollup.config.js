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
                    src: resolve("sources", "icon.png"),
                    dest: resolve("docs")
                },
                {
                    src: resolve("sources", "apple-touch-icon.png"),
                    dest: resolve("docs")
                },
                {
                    src: resolve("sources", "manifest.webmanifest"),
                    dest: resolve("docs")
                },
                {
                    src: resolve("sources", "LICENSE"),
                    dest: resolve("docs")
                },
                {
                    src: resolve("sources", "sitemap.xml"),
                    dest: resolve("docs")
                }
            ]
        }),
        nodeResolve(),
        commonjs(),
        postcss({
            plugins: [
                tailwindcss,
                autoprefixer,
                cssnano
            ],
            extract: true
        }),
        terser()
    ],
    output: {
        file: resolve("docs", "index.js"),
        format: "iife"
    }
};
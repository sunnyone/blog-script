import ts from "@wessberg/rollup-plugin-ts";
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import postCss from "rollup-plugin-postcss";
import {terser} from "rollup-plugin-terser";

export default {
    input: "src/ts/blog-script.ts",
    output: {
        file: "dist/blog-script.js",
        format: "iife"
    },
    plugins: [
        ts(),
        postCss(),
        commonjs(),
        nodeResolve(),
        terser()
    ]
};

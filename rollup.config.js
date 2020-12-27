import ts from "@wessberg/rollup-plugin-ts";
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import postCss from "rollup-plugin-postcss";
import {terser} from "rollup-plugin-terser";
import externals from "rollup-plugin-node-externals";

export default {
    input: "src/ts/blog-script.ts",
    output: {
        file: "dist/blog-script.js",
        format: "iife"
    },
    plugins: [
        externals(),
        nodeResolve(),
        commonjs(),
        ts(),
        postCss(),
        terser()
    ]
};

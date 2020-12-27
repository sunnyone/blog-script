import ts from "@wessberg/rollup-plugin-ts";
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import postCss from "rollup-plugin-postcss";
import {terser} from "rollup-plugin-terser";
import externals from "rollup-plugin-node-externals";
import copy from "rollup-plugin-copy";
import replace from "@rollup/plugin-replace";

export default {
    input: "src/ts/blog-script.ts",
    output: {
        file: "dist/js/blog-script.js",
        format: "iife"
    },
    plugins: [
        copy({
            targets: [
                { src: 'examples/*', dest: 'dist/' },
        ]}),

        externals(),
        nodeResolve(),
        commonjs(),

        replace({
            'process.env.NODE_ENV': JSON.stringify( 'production' )
        }),

        ts(),
        postCss(),
        terser()
    ]
};

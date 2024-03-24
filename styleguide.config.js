/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  require: [path.resolve(__dirname, "src/_assets/_style/_base.scss")],
  sections: [
    {
      name: "common",
      components: "src/_assets/_components/common/*.vue",
    },
    {
      name: "icons",
      components: "src/_assets/_components/icons/*.vue",
    },
  ],
  webpackConfig: {
    cache: false,
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    useBuiltIns: "usage",
                    corejs: 3,
                  },
                ],
              ],
            },
          },
        },
        {
          test: /\.vue$/,
          exclude: /node_modules/,
          loader: "vue-loader",
        },
        {
          test: /\.ts$/,
          loader: "ts-loader",
          options: {
            appendTsSuffixTo: [/\.vue$/],
            ignoreDiagnostics: [7006], // Suppress "Parameter 'x' implicitly has an 'any' type" error
          },
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.scss$/,
          use: [
            "vue-style-loader",
            "css-loader",
            {
              loader: "sass-loader",
              options: {
                implementation: require("sass"),
                additionalData: `
                  @use '@/_style/_variables.scss' as *;
                  @use '@/_style/_utility.scss' as *;
                  @use '@/_style/_layout.scss' as *;
                `,
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".js", ".vue", ".json"],
      alias: {
        "@": path.resolve(__dirname, "src/_assets"),
        vue$:
          process.env.MODE === "production"
            ? "vue/dist/vue.esm-browser.prod.js"
            : "vue/dist/vue.esm-browser.js",
      },
    },
    plugins: [new VueLoaderPlugin()],
  },
};

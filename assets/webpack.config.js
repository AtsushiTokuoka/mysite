/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const webpack = require("webpack");
const { VueLoaderPlugin } = require("vue-loader");
const { assetsUrl } = require("./gulptask/config");

module.exports = {
  cache: process.env.MODE === "production" ? false : true,
  watch: process.env.MODE === "production" ? false : true,
  mode: process.env.MODE,
  watchOptions: {
    poll: 1000,
  },
  output: {
    filename: (pathData) => {
      console.log(pathData.chunk.name);
      const name = pathData.chunk.name;
      if (name.endsWith(".ts")) {
        return name.replace(/\.ts$/, ".js");
      }
      return name;
    },
  },
  module: {
    rules: [
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
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  require("postcss-purgecss")({
                    content: ["./src/**/*.vue"],
                  }),
                  ["autoprefixer"],
                ],
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
              additionalData: `
                  @use '@/client/_styles/_variables.scss' as *;
                  @use '@/client/_styles/_utility.scss' as *;
                  @use '@/client/_styles/_layout.scss' as *;
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
      "@": path.resolve(__dirname, "./src"),
      vue$:
        process.env.MODE === "production"
          ? "vue/dist/vue.esm-browser.prod.js"
          : "vue/dist/vue.esm-browser.js",
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      __VUE_PROD_DEVTOOLS__: JSON.stringify(process.env.MODE === "development"),
      BASE_URL: JSON.stringify(assetsUrl),
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        jquery: {
          test: /[\\/]node_modules[\\/](jquery)[\\/]/,
          name: "vendors/jquery@3.7.1.js",
          chunks: "all",
          enforce: true,
        },
        vue: {
          test: /[\\/]node_modules[\\/](vue)[\\/]/,
          name: "vendors/vue@3.2.26.js",
          chunks: "all",
          enforce: true,
        },
        vuex: {
          test: /[\\/]node_modules[\\/](vuex)[\\/]/,
          name: "vendors/vuex@4.1.0.js",
          chunks: "all",
          enforce: true,
        },
        router: {
          test: /[\\/]node_modules[\\/](vue-router)[\\/]/,
          name: "vendors/vue-router@4.3.3.js",
          chunks: "all",
          enforce: true,
        },
      },
    },
  },
};

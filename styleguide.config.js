const { VueLoaderPlugin } = require('vue-loader');
module.exports = {
  sections: [
    {
      name: '共通',
      components: 'src/_assets/_components/common/*.vue'
    },
    {
      name: 'Test',
      components: 'src/_assets/_components/*.vue'
    },
  ],
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: '> 0.25%, not dead',
                    useBuiltIns: 'usage',
                    corejs: 3
                  }
                ]
              ]
            }
          }
        },
        {
          test: /\.vue$/,
          exclude: /node_modules/,
          loader: 'vue-loader',
        },
        {
          test: /\.css$/, 
          use: [
            'style-loader',
            'css-loader',
          ],
        },
        {
          test: /\.scss$/, 
          use: [
            'vue-style-loader',
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                implementation: require('sass')
              }
            },
          ],
        },
      ],
    },
    plugins: [
      new VueLoaderPlugin()
    ],
  }
}
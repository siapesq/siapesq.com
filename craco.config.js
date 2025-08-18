const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  eslint:{
    enable: false,
  },
  style: {
    postcss: {
      plugins: [
        ...(process.env.NODE_ENV === "production"
          ? [
              purgecss({
                content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
                defaultExtractor: (content) =>
                  content.match(/[\w-/:]+(?<!:)/g) || [],
              }),
            ]
          : []),
      ],
    },
  },

  webpack: {
    configure: (webpackConfig) => {
      if (process.env.NODE_ENV === "production") {
        webpackConfig.plugins.push(
          new ImageMinimizerPlugin({
            minimizer: {
              implementation: ImageMinimizerPlugin.imageminMinify,
              options: {
                plugins: [
                  ["mozjpeg", { quality: 75 }],
                  ["pngquant", { quality: [0.6, 0.8] }],
                  ["webp", { quality: 75 }],
                ],
              },
            },
          })
        );
      }
      return webpackConfig;
    },
  },
};

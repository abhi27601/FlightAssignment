const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[contentHash].bundle.js",
    path: path.resolve(__dirname, "public","dist"),
    publicPath: '/'
  },
  optimization: {
    minimize:true,
    minimizer: [
      new CssMinimizerPlugin({
        sourceMap:true,
        cache:false
      }),
      new TerserPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/template.html",
        favicon:"./src/images/favicon.png",
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      })
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name].[contentHash].css"}),
    new CleanWebpackPlugin(),
    new CssMinimizerPlugin()
  ],
  devtool: "none",
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader, //3. Extract css into files // make link files and attach.
          "css-loader", //2. Turns css into commonjs
          "sass-loader" //1. Turns sass into css
        ]
      }
    
    ]
  }, 
});

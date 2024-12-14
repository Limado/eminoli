const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// JS minimizer
const TerserPlugin = require("terser-webpack-plugin");
// Image optimization
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const { extendDefaultPlugins } = require("svgo");

// Busca el argumento "--mode" en process.argv
const modeIndex = process.argv.indexOf('--mode=production');
const mode = modeIndex !== -1 ? "production" : 'development'; // Valor por defecto 'development'
const isProduction = mode.toLowerCase() === 'production';

console.log(`Build mode: ${mode}`);

module.exports = {
    // The entry point file described above
    entry: './src/index.js',
    // The location of the build folder described above
    output: {
        filename: `index.js`,
        path: path.resolve(__dirname, isProduction ? 'dist' : 'public'),
        clean: true,
    },
    // Optional and for development only. This provides the ability to
    // map the built code back to the original source format when debugging.
    devtool: 'eval-source-map',
    module: {
        rules: [{
            test: /.s?css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        }, {
            test: /\.(jpe?g|png|gif|svg)$/i,
            type: "asset",
        }],
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname, 'src/assets'), to: path.resolve(__dirname, 'public/assets') },
                {
                    from: "src/*.html",
                    to({ context, absoluteFilename }) {
                        return "[name][ext]";
                    },
                },
            ],
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
            // `...`
            new HtmlMinimizerPlugin(),
            new CssMinimizerPlugin(),
            new TerserPlugin(),
            new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.imageminMinify,
                    options: {
                        // Lossless optimization with custom option
                        // Feel free to experiment with options for better result for you
                        plugins: [
                            ["gifsicle", { interlaced: true }],
                            ["jpegtran", { progressive: true }],
                            ["optipng", { optimizationLevel: 5 }],
                            // Svgo configuration here https://github.com/svg/svgo#configuration
                            [
                                "svgo",
                                {
                                    plugins: extendDefaultPlugins([{
                                        name: "removeViewBox",
                                        active: false,
                                    },
                                    {
                                        name: "addAttributesToSVGElement",
                                        params: {
                                            attributes: [{ xmlns: "http://www.w3.org/2000/svg" }],
                                        },
                                    },
                                    ]),
                                },
                            ],
                        ],
                    },
                },
            }),
        ],
    },
};
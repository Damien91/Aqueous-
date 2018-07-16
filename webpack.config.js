const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const minimize = process.argv.indexOf('--minimize') !== -1;

module.exports = {
    mode: minimize ? "production": "development",
    entry: path.join(__dirname, '/src/app.ts'),
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'dist')
    },
    performance: {hints: minimize ? "warning" : false},
    optimization: {
        minimize: minimize,
        minimizer: [new UglifyJsPlugin({
          include: /\.min\.js$/
        })]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpg|gif|html)$/,
                exclude: /dist\//,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                            emitFile: true,
                            outputPath: path.join(__dirname, '/dist/'),
                        },
                    },
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                       loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: "[name]_[local]_[hash:base64]",
                            sourceMap: true,
                            minimize: true
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", "html", "css"]
    },
};
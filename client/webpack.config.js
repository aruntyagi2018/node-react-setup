const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    module : {
        rules:[
            {
            test: /\.(js|jsx)$/,
            exclude:/node_modules/,
            use:{
                loader:"babel-loader"
            }
            },
            {
                test:/\.html$/,
                use:[
                    {
                        loader : "html-loader",
                        options:{ minimize : true }
                    }
                ]
            },
            {
                test:/\.css$/,
                use :[ MiniCssExtractPlugin.loader,"css-loader"]
            }
        ]
    },
    devServer:{
        port:3000,
        proxy: {
            '/api': {
                target: 'http://localhost:5000',
                secure: false
            }
        }
    },
    plugins :[
        new HtmlWebPackPlugin (
            {
                template : "./src/index.html",
                filename : "./index.html"
            }
        ),
        new MiniCssExtractPlugin(
            {
                filename : "[main].css",
                chunkFilename : "[id].css"
            }
        )
    ]
};
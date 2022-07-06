const path = require('path')

module.exports = {
    entry: './src/index.ts',
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: [
            {
                directory: path.join(__dirname, 'dist'),
                publicPath: '/dist'
            },
            {
                directory: path.join(__dirname, 'src'),
                publicPath: '/src'
            }
        ],
        compress: true,
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        library: {
            name: 'evCore',
            type: 'umd'
        },
        filename: 'evinced.bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}

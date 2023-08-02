const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
   context: path.resolve(__dirname,'src'),
   mode: 'development',
   entry: {
      main: './index.js',
      analytics: './a_nalytics.js'
   }, // откуда начинаем
   output: { // куда складываем результаты работы
      filename: '[name].[contenthash].bundle.js',
      path: path.resolve(__dirname, 'dist')
   },
   resolve: {
      extensions: ['.js', '.json', '.png'],
      alias: {
         '@m_odels': path.resolve(__dirname, 'src/m_odels'),
         '@': path.resolve(__dirname, 'src'),
      }
   },
   optimization: {
      splitChunks: {
         chunks: 'all'
      }
   },
   plugins: [
      new HTMLWebpackPlugin({
          template: './index.html'
      }),
      new CleanWebpackPlugin()
   ],
   module: {
      rules: [
         {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
         },
         {
            test: /\.(png|jpg|svg|gif)$/,
            use: ['file-loader']
         },
         {
            test: /\.(ttf|woff|woff2|eot)$/,
            use: ['file-loader']    
         },
         {
            test: /\.xml$/,
            use: ['xml-loader']
         },
         {
            test: /\.csv$/,
            use: ['csv-loader']
         },
      ]
   }
}
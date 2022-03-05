const path = require('path');
const basePath = __dirname;
const distPath = '/src/public';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const webpackInitConfig = {
    mode: 'development',
    resolve: {
        extensions: ['.js','.jsx','.tsx','.ts']
    },
    entry: {
        bundle: ['./src/app/index.js'],
    },
    output: {
        path: path.join(basePath, distPath),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
              test: /\.tsx?$/,
              loader: 'babel-loader',
            },
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.jsx/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css/,
                exclude: /node_modules/,
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                      publicPath:path.join(basePath, distPath) ,
                    },
                  },
                  'css-loader',
                ],
            },
            {
              test: /\.(png|jpg|svg)$/,
              exclude: /node_modules/,
              use: 'url-loader'
            }
        ]
    },

    

    devServer: {
      before: function (app, server, compiler) {
        app.get('/', function (req, res) {
          res.sendFile(path.join(__dirname,"src","public","index.html"));
        });
      },
      historyApiFallback: true,
      contentBase: path.join(__dirname, 'src','public'),
      compress: true,
      port: 9000,
    },

    plugins: [
        new MiniCssExtractPlugin({
          filename: 'styles.css'
        }),
      ]
    
    
};
module.exports = webpackInitConfig;


// module.exports={
//     entry: './src/app/index.js',
//     output: {
//         path: __dirname + '/src/public',
//         filename: 'bundle.js'
//     },

//     module: {
//         rules:[
//             {
//                 use: 'babel-loader',
//                 test: /\.js$/,
//                 exclude: /node_modules/
//             },


//             {
//                 use: 'babel-loader',
//                 test: /\.jsx$/,
//                 exclude: /node_modules/
//             }

//         ]
//     }

// };




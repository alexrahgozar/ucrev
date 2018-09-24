var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');
 // import css from 'file.css';
// const css = require('./test.css').toString();
module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module : {
    rules : [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel-loader',
        query: {
          presets: ['react', 'env']
       }
     },
     {
       test: /\.(gif|png|jpe?g|svg)/i,
       use: [
         'file-loader',
         {
           loader: 'image-webpack-loader',
           options: {
             gifsicle: {
               interlanced: false
             },
             optipng: {
               optimizationLevel : 7
             },
             pngquant: {
               quality: '69-90',
               speed: 4
             },
             mozjpeg: {
               progressive: true,
               quality: 65
             }

           }
         }
       ]
     }
    ]
  }
};
//
// module.exports = {
//   entry:  `${SRC_DIR}/uc2.jpg`,
//   output: {
//     filename: 'bundle.js',
//     path: DIST_DIR
//   },
//   module : {
//     rules: [
//       {
//         test: /\.css$/,
//         use: [ 'style-loader', 'css-loader' ]
//       },
//       {
//         test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
//         loader: 'url-loader',
//         options: {
//           limit: 10000
//         }
//       }
//     ]
//   }
// };

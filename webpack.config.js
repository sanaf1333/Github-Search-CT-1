const path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AntDesignThemePlugin = require('antd-theme-webpack-plugin');
const options = {
  antDir: path.join(__dirname, './node_modules/antd'),
  stylesDir: path.join(__dirname, './src'),
  varFile: path.join(__dirname, './src/styles/variables.less'),
  themeVariables: ['@primary-color'],
  indexFileName: 'index.html',
  generateOnce: false,
  lessUrl: "https://cdnjs.cloudflare.com/ajax/libs/less.js/2.7.2/less.min.js",
  publicPath: "",
  customColorRegexArray: [], // An array of regex codes to match your custom color variable values so that code can identify that it's a valid color. Make sure your regex does not adds false positives.
}

const themePlugin = new AntDesignThemePlugin(options);
// in config object

module.exports={

    entry: './src/index.js',

    output:{
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },

    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        themePlugin,
        
    ],

    module:{
        rules:[
            {
                test: /.(jsx|js)$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options:{
                        presets: ['@babel/preset-env','@babel/preset-react'],
                        plugins: [
                            ['import', { libraryName: "antd", style: true }]
                          ]
                    }
                }
            },
            
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
            test: /\.(png|jpg|gif)$/,
            use: [
                {
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
                }
            ]
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                  {
                    loader: 'babel-loader',
                  },
                  {
                    loader: '@svgr/webpack',
                    options: {
                      babel: false,
                      icon: true,
                    },
                  },
                ],
              }
        ]
        
    }
}
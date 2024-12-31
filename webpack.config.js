const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    entry: "./src/JootM2.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "JootM2.js",
		library: 'JootM2',
        libraryTarget: 'var'
    },
	module: {
        rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	},
	// 开发服务器
	devServer: {
		static:`./dist/`, //允许配置从跟目录下提供静态文件
		host: "localhost", // 启动服务器域名
		port: "80", // 启动服务器端口号
		open: true, // 是否自动打开浏览器
	  },
	externals: {
		'pixi.js': "window.PIXI"
	},
	plugins: [
		new CleanWebpackPlugin({
			cleanOnceBeforeBuildPatterns: ['**/*', '!index.html']
		  })
    ]
};
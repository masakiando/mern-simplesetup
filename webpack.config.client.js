const path = require('path');
const webpack = require('webpack');
const CURRENT_WORKING_DIR = process.cwd();

const config = {
	name: 'browser',
	mode: 'development',
	devtool: 'eval-source-map',
	entry: [
		'react-hot-loader/patch',
		'webpack-hot-middleware/client?reload=true',
		path.join(CURRENT_WORKING_DIR, 'client/main.js'),
	],
	output: {
		path: path.join(CURRENT_WORKING_DIR, '/dist'),
		filename: 'bundle.js',
		publicPath: '/dist/',
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
		],
	},
	plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()],
};

module.exports = config;

// mode
// process.env.NODE_ENV指定された値に設定し、それに応じてWebpackに組み込みの最適化を使用するように指示します。明示的に設定されていない場合、デフォルトでvalueに設定されます'production'。CLI引数として値を渡すことで、コマンドラインから設定することもできます。
// devtool 
// ソースマップを生成する方法を指定します（ある場合）。一般に、ソースマップは、圧縮ファイル内のコードをソースファイル内の元の位置にマッピングしてデバッグを支援する方法を提供します。
// entry 
// Webpackがバンドルを開始するエントリファイルを指定します。この場合  main.js はclientフォルダー内のファイルです  。 
// output
// バンドルされたコードの出力パスを指定しますdist/bundle.js。この場合、に設定します。
// publicPath 
// アプリケーション内のすべてのアセットのベースパスを指定できます。
// module 
// トランスピレーションに使用されるファイル拡張子の正規表現ルールと、除外されるフォルダーを設定します。ここで使用する翻訳ツールはbabel-loaderです。
// HotModuleReplacementPluginのホットモジュール交換を有効にしますreact-hot-loader。
// NoEmitOnErrorsPlugin コンパイルエラーが発生した場合の放出をスキップできます。
const path = require('path');
const toml = require('toml');
const yaml = require('yamljs');
const json5 = require('json5');

module.exports = {
	entry: './src/index.js',
	mode: 'none',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			// image loading
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
			// Fonts loading
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
			// CSV and TSV
			{
				test: /\.(csv|tsv)$/i,
				use: ['csv-loader'],
			},
			// XML
			{
				test: /\.xml$/i,
				use: ['xml-loader'],
			},
			// Parse to Json format of thesee toml,yaml and json5 files
			{
				test: /\.toml$/i,
				type: 'json',
				parser: {
					parse: toml.parse,
				},
			},
			{
				test: /\.yaml$/i,
				type: 'json',
				parser: {
					parse: yaml.parse,
				},
			},
			{
				test: /\.json5$/i,
				type: 'json',
				parser: {
					parse: json5.parse,
				},
			},
		],
	},
};

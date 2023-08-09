import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import dotenv from 'dotenv'
import Dotenv from 'dotenv-webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

import { IBuildOptions } from './types/config'

export function buildPlugins({ paths, isDev }: IBuildOptions): webpack.WebpackPluginInstance[] {
	const plugins = [
		new HtmlWebpackPlugin({
			template: paths.html,
		}),
		new webpack.ProgressPlugin(),
		new MiniCssExtractPlugin({
			filename: 'static/css/[name].[contenthash:8].css',
			chunkFilename: 'static/css/[name].[contenthash:8].css',
		}),
		new webpack.DefinePlugin({
			__IS_DEV__: JSON.stringify(isDev),
		}),
		new ReactRefreshWebpackPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new Dotenv({ systemvars: true }),
	]

	isDev &&
		plugins.push(
			new BundleAnalyzerPlugin({
				openAnalyzer: false,
			}),
		)

	return plugins
}

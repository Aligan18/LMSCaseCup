import { RuleSetRule } from 'webpack'

import { buildCssLoader } from './loaders/buildCssLoader'
import { IBuildOptions } from './types/config'

export function buildLoaders({ isDev }: IBuildOptions): RuleSetRule[] {
	const svgLoader = {
		test: /\.svg$/,
		use: ['@svgr/webpack'],
	}
	const fileLoader = {
		test: /\.(png|jpe?g|gif)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	}

	const styleLoader = buildCssLoader(isDev)

	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	}

	const babelLoader = {
		test: /\.(js|jsx|ts|tsx)$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-env'],
			},
		},
	}

	return [fileLoader, svgLoader, babelLoader, typescriptLoader, styleLoader]
}

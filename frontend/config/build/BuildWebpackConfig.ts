import webpack from 'webpack'

import { buildDevServer } from './BuildDevServer'
import { buildLoaders } from './BuildLoaders'
import { buildPlugins } from './BuildPlugins'
import { buildResolves } from './BuildResolves'
import { IBuildOptions } from './types/config'

export function buildWebpackConfig(options: IBuildOptions): webpack.Configuration {
	const { mode, paths, isDev } = options

	return {
		mode,
		entry: paths.entry,
		output: {
			filename: 'static/js/[name].[contenthash].js',
			path: paths.build,
			clean: true,
		},
		module: {
			rules: buildLoaders(options),
		},

		resolve: buildResolves(options),

		plugins: buildPlugins(options),

		devtool: isDev ? 'inline-source-map' : undefined,
		devServer: isDev ? buildDevServer(options) : undefined,
	}
}

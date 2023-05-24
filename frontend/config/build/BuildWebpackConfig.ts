import webpack  from "webpack"
import { buildLoaders } from './BuildLoaders';
import { buildPlugins } from './BuildPlugins';
import { buildResolves } from './BuildResolves';
import { IBuildOptions } from "./types/config";

export function buildWebpackConfig (options:IBuildOptions): webpack.Configuration {

      const { mode, paths} = options;

      return  {
        mode,
        entry: paths.entry,
        output: {
          filename: '[name].[contenthash].js',
          path: paths.build,
          clean: true, 
        },
        module: {
          rules: buildLoaders(),
        },
        
        resolve: buildResolves(),
        
        plugins: buildPlugins(options)
      };
}
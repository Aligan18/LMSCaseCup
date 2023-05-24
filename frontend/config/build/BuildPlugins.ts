import HtmlWebpackPlugin from "html-webpack-plugin"

import webpack  from "webpack"
import { IBuildOptions, IBuildPath } from "./types/config"

export function buildPlugins({paths}:IBuildOptions) : webpack.WebpackPluginInstance[] {
    

    return [
        new HtmlWebpackPlugin({
            template: paths.html, 
        }),
        new webpack.ProgressPlugin()
      ]
}
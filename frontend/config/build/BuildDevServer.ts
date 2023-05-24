import {Configuration as DevServerConfiguration}  from 'webpack-dev-server'
import { IBuildOptions } from './types/config'

export function buildDevServer ({port}:IBuildOptions):DevServerConfiguration{
    return {
        port,
        open: true,
    }
}
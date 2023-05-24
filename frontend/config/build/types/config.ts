



export type IBuildMode = 'development' | 'production'

export interface IBuildPath {
    entry: string
    build: string
    html: string
}

export interface IBuildEnv {
    mode: IBuildMode,
    port: number
}

export interface IBuildOptions {
    mode: IBuildMode
    paths: IBuildPath
    isDev : boolean
    port: number
}
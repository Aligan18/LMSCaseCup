



export type IBuildMode = 'development' | 'production'

export interface IBuildPath {
    entry: string
    build: string
    html: string
}

export interface IBuildOptions {
    mode: IBuildMode
    paths: IBuildPath
    isDev : boolean
}
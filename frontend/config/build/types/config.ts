export type IBuildMode = 'development' | 'production'

export interface IBuildPath {
	static: string
	entry: string
	build: string
	html: string
	src: string
}

export interface IBuildEnv {
	mode: IBuildMode
	port: number
}

export interface IBuildOptions {
	mode: IBuildMode
	paths: IBuildPath
	isDev: boolean
	port: number
}

import axios, { AxiosInstance } from 'axios'

import { IToken } from 'entities/Authorization/types'

import { TOKEN_LOCALSTORAGE_KEY } from 'shared/const'

const version = '/api/v1'
const host_url = __IS_DEV__ ? process.env.REACT_APP_API_URL + version : process.env.REACT_APP_API_PROD + version
const token: IToken = JSON.parse(String(localStorage.getItem(TOKEN_LOCALSTORAGE_KEY)))
// const token = user?.token.access

console.log('host_url', host_url)
export let $api: AxiosInstance

if (token?.access) {
	$api = axios.create({
		baseURL: host_url,
		headers: { Authorization: `Bearer ${token?.access}` },
	})
} else {
	$api = axios.create({
		baseURL: host_url,
	})
}

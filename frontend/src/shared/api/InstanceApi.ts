import axios from 'axios'

import { IToken } from 'entities/Authorization/types'

import { TOKEN_LOCALSTORAGE_KEY } from 'shared/const'

const version = '/api/v1'
const host_url = process.env.REACT_APP_API_URL + version
const token: IToken = JSON.parse(String(localStorage.getItem(TOKEN_LOCALSTORAGE_KEY)))
// const token = user?.token.access

export const $api = axios.create({
	baseURL: host_url,
	headers: { Authorization: `Bearer ${token?.access}` },
})

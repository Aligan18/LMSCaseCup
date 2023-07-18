import axios from 'axios'

import { ICustomUserSchema } from 'entities/Users/CustomUser'

import { USER_LOCALSTORAGE_KEY } from 'shared/const'

const version = '/api/v1'
const host_url = process.env.REACT_APP_API_URL + version
const user: ICustomUserSchema = JSON.parse(String(localStorage.getItem(USER_LOCALSTORAGE_KEY)))
const token = user?.token.access

console.log('token', token)

export const $api = axios.create({
	baseURL: host_url,
	headers: { Authorization: `Bearer ${token}` },
})

/* @flow */

import axios from 'axios'

const BASE_URL = ''

const requests = {
  del: (url: string) => axios.delete(`${BASE_URL}${url}`),
  get: (url: string) => axios.get(`${BASE_URL}${url}`),
  put: (url: string, body?: Object) => axios.put(`${BASE_URL}${url}`, body),
  post: (url: string, body?: Object) => axios.post(`${BASE_URL}${url}`, body)
}

export default {}

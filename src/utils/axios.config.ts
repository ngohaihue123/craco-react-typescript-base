import axios from 'axios'

const API_ROOT = process.env.REACT_APP_SERVER_URL

const instance = axios.create({
  baseURL: API_ROOT,
  timeout: 30000,
  withCredentials: true
  // headers: {'X-Custom-Header': 'foobar'}
})

export default instance

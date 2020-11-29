import axios from './axios.config'

const configFile = (uploadProgress: any) => {
  let config = {
    headers: { 'content-type': 'multipart/form-data' }
  }
  if (uploadProgress) {
    config = {
      ...config
      //   onUploadProgress: uploadProgress
    }
  }
  return config
}

const convertError = (err: any) => {
  if (err.response && err.response.data) {
    const errors = err.response.data.errors || []
    if (errors.length === 0) {
      throw [new Error('Something went wrong')]
    }

    const multiErrors = errors.map((error: any) => {
      return new Error(error)
    })

    throw multiErrors
  } else {
    throw [err]
  }
}

const get = (path: string) => axios.get(path).catch(convertError)
const post = (path: string, body: any) => axios.post(path, body).catch(convertError)
const put = (path: string, body: any) => axios.put(path, body).catch(convertError)
const del = (path: string, body: any) => axios.delete(path, body).catch(convertError)
const postFile = (path: string, body: any, uploadProgress: any) =>
  axios.post(path, body, configFile(uploadProgress)).catch(convertError)

export { get, post, put, del, postFile }

import { Axios } from 'axios'

const instance = new Axios({
  baseURL: 'https://courses.zju.edu.cn/api',
  timeout: 5000,
})

export default instance

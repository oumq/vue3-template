import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError
} from 'axios'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import { notification } from 'ant-design-vue'

interface CodeMessageType {
  [code: number]: string
}

class Request {
  private instance: AxiosInstance

  private codeMessage: CodeMessageType = {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。'
  }

  constructor() {
    this.instance = axios.create({
      baseURL: '/api',
      timeout: 10000
    })
    this.initInterceptors()
  }

  // 初始化拦截器
  private initInterceptors() {
    this.instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        NProgress.start()
        return config
      },
      (error: AxiosResponse) => {
        Promise.reject(error)
      }
    )
    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        NProgress.done()
        // console.log(response)
        return response
      },
      (error: AxiosError) => {
        NProgress.done()
        return this.errorHandler(error)
      }
    )
  }

  // 异常处理
  private errorHandler(error: AxiosError) {
    const { response } = error
    if (response && response.status) {
      const { status, statusText } = response
      const errorText = this.codeMessage[status] || statusText
      notification.error({
        message: `请求错误 ${status}`,
        description: errorText
      })
    } else if (!response) {
      notification.error({
        description: '您的网络发生异常，无法连接服务器',
        message: '网络异常'
      })
    }
    return Promise.reject(error)
  }

  // get请求
  public get(url: string, options?: {}) {
    return this.instance.request({
      url: url,
      method: 'get',
      headers: {
        charset: 'utf-8'
      },
      ...options
    })
  }

  // post请求
  public post(url: string, data: {}, options?: {}) {
    return this.instance.request({
      url: url,
      method: 'post',
      data: data,
      headers: {
        'Content-Type': 'application/json',
        charset: 'utf-8'
      },
      ...options
    })
  }
}

const request = new Request()

export default request

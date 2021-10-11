import axios, { AxiosInstance, AxiosRequestConfig, AxiosPromise, AxiosResponse } from "axios";

class CommonHttp {
    constructor(public baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    private getInsideConfig() {
        const config = {
            baseURL: this.baseUrl,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json; charset=UTF-8',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type',
                'Access-Control-Allow-Methods': 'POST,GET',
            },
            timeout: 4000,
            withCredentials: false,
            maxContentLength: 40000
        }
        return config;
    }

    private interceptors(instance: AxiosInstance, url?: string) {
        instance.interceptors.request.use(
            config => {
                return config;
            },
            error => {
                return Promise.reject(error);
            }
        )
        instance.interceptors.response.use(
            res => {
                const {
                    data,
                    status
                } = res
                return {
                    data,
                    status
                }
            },
            error => {
                console.log(error);
                return Promise.reject('请求失败了。');
            }
        )
    }

    public request(options: AxiosRequestConfig): AxiosPromise {
        const instance: AxiosInstance = axios.create()
        options = Object.assign(this.getInsideConfig(), options);
        this.interceptors(instance, options.url)
        return instance(options)
    }
}
export default CommonHttp;
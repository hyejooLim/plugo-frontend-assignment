import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

const createApi = axios.create({
  baseURL: 'https://12df7ab1-02c3-48d4-9651-1062abf07984.mock.pstmn.io/web',
});

createApi.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (err: AxiosError) => {
    return Promise.reject(err);
  }
);

createApi.interceptors.response.use(
  (res: AxiosResponse) => {
    const response = res.data;
    return response;
  },
  (err: AxiosError) => {
    return Promise.reject(err);
  }
);

const clientApi = {
  get: <T>(url: string): Promise<T> => createApi.get(url),
  post: <T>(url: string, body: object): Promise<T> => createApi.post(url, body),
  put: <T>(url: string): Promise<T> => createApi.put(url),
  delete: <T>(url: string): Promise<T> => createApi.delete(url),
};

export default clientApi;

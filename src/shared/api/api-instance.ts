import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { publicConfig } from '../config/public-config'

export const apiInstance = axios.create({
  baseURL: publicConfig.BACKEND_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const createInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig,
): Promise<T> => {
  return apiInstance({
    ...config,
    ...options,
  }).then((r) => r.data);
};

export type BodyType<Data> = Data;
export type ErrorType<Error> = AxiosError<Error>;

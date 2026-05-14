import axios, { AxiosResponse, AxiosError, InternalAxiosRequestConfig } from "axios";
import { getClientCookie, setClientCookie } from "../../helper/cookies/clientCookie/clientSideCookie"; 
import { RefreshTokenClient } from "../../helper/refreshToken/ClientRefreshToken";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL; 

const instance = axios.create({
  baseURL: BASE_URL,
});

let isRefreshing = false;

const onSuccess = (response:any) => {
  return response;
};
const onError = async (error: AxiosError): Promise<never> => {
  const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };
  
  if (error.response) {
    if (error.response.status >= 404 && error.response.status < 500) {
      console.log(
        "Client Error!! :",
        error.response.status + error.response.statusText
      );
    } else if (error.response.status >= 500) {
      console.error(
        "Server Error",
        error.response.status + error.response.statusText
      );
    } else if (error.response.status === 401 && originalRequest && !originalRequest._retry) {
      console.error(" Unauthorized - Token might be expired");
      
      originalRequest._retry = true;
      
      if (!isRefreshing) {
        isRefreshing = true;
        
        try {
          await RefreshTokenClient();
          isRefreshing = false;
          
          return instance(originalRequest);
          
        } catch (refreshError) {
          isRefreshing = false;
          if (typeof window !== "undefined") {
            window.location.href = "/login";
          }
          return Promise.reject(refreshError);
        }
      }
    }
  }
  console.error(error);
  return Promise.reject(error);
};

instance.interceptors.response.use(onSuccess, onError);

instance.interceptors.request.use(
  (config) => {
    const token = getClientCookie("ServerAccessToken"); 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
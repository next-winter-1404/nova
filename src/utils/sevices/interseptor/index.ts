import axios, {
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
} from "axios";
import { getServerSideCookie } from "../../helper/cookies/serverCookie/serverSideCookie";
import { RefreshTokenClient } from "../../helper/refreshToken/ClientRefreshToken";

const BASE_URL = process.env.NEXT_API_URL;

const instance = axios.create({
  baseURL: BASE_URL,
});

let isRefreshing = false;

const onSuccess = <T>(response: AxiosResponse<T>): T => {
  return response.data;
};

const onError = async (error: AxiosError): Promise<never> => {
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
    } else if (error.response.status === 401) {
      console.error(" Unauthorized - Token might be expired");

      if (!isRefreshing && error.config) {
        isRefreshing = true;

        try {
          await RefreshTokenClient();
          isRefreshing = false;

          return instance(error.config);
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
  async (config) => {
    const token = await getServerSideCookie("ServerAccessToken");
    if (token != null) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;

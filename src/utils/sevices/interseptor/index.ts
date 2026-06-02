// "use server";

import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { getServerSideCookie } from "../../helper/cookies/serverCookie/serverSideCookie";
import { ServerRefreshToken } from "../../helper/refreshToken/ServerRefreshToken";
import { redirect } from "next/navigation";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const instance = axios.create({
  baseURL: BASE_URL,
});

let isRefreshing = false;
let refreshSubscribers: ((token: string) => void)[] = [];

function onRefreshed(token: string) {
  refreshSubscribers.forEach((cb) => cb(token));
  refreshSubscribers = [];
}

function addSubscriber(callback: (token: string) => void) {
  refreshSubscribers.push(callback);
}

const onSuccess = (response: any) => response;

const onError = async (error: AxiosError): Promise<never> => {
  const originalRequest = error.config as InternalAxiosRequestConfig & {
    _retry?: boolean;
  };

  if (error.response) {
    const status = error.response.status;
    if (status >= 404 && status < 500 && status !== 401) {
      console.log("Client Error:", `${status} ${error.response.statusText}`);
    } else if (status >= 500) {
      console.error("Server Error:", `${status} ${error.response.statusText}`);
    } else if (status === 401 && originalRequest && !originalRequest._retry) {
      originalRequest._retry = true;

      if (isRefreshing) {
        return new Promise((resolve) => {
          addSubscriber((token: string) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;

            resolve(instance(originalRequest));
          });
        }) as never;
      }

      isRefreshing = true;

      try {
        const refreshResult = await ServerRefreshToken();

        console.log("Refresh Result:", JSON.stringify(refreshResult, null, 2));

        if (!refreshResult.success || !refreshResult.accessToken) {
          isRefreshing = false;
        }

        const newToken = refreshResult.accessToken;

        originalRequest.headers.Authorization = `Bearer ${newToken}`;

        onRefreshed(newToken);

        isRefreshing = false;

        return instance(originalRequest) as never;
      } catch (refreshError) {
        console.error("Refresh Error:", refreshError);

        isRefreshing = false;

        redirect("/login");
      }
    }
  }

  return Promise.reject(error);
};

instance.interceptors.request.use(
  async (config) => {
    if (!config.headers?.Authorization) {
      const token = await getServerSideCookie("ServerAccessToken");

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(onSuccess, onError);

export default instance;

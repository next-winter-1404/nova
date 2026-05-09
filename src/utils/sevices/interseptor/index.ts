import axios, { AxiosResponse, AxiosError } from "axios";
import { getServerSideCookie } from "../../helper/cookies/serverCookie/serverSideCookie";

const BASE_URL = process.env.NEXT_API_URL;

const instance = axios.create({
  baseURL: BASE_URL,
});

const onSuccess = <T>(response: AxiosResponse<T>): T => {
  return response.data;
};

const onError = (error: AxiosError): Promise<never> => {
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

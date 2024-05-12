import axios from "axios";
import { httpHost } from "../utils/enums";

const $host = axios.create({
  baseURL: httpHost.REACT_APP_API_URL,
});

const $authHost = axios.create({
  baseURL: httpHost.REACT_APP_API_URL,
});

const authInterceptor = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
};

$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };

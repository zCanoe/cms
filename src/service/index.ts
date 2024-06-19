import HYRequest from "./request";
import { BASE_URL, TIME_OUT1 } from "./config";
import { useLoginStore } from "@/store/login/login";
import router from "@/router";

const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT1,
  interceptors: {
    requestInterceptor: (config) => {
      if (config.headers && useLoginStore().token) {
        config.headers.Authorization = useLoginStore().token;
      } else {
        router.push("/login");
      }
      return config;
    },
    requestInterceptorCatch: (err) => {
      console.log("实例请求失败拦截");
    },
    responseInterceptor: (res) => {
      console.log("实例响应成功拦截", res);
      return res;
    },
    responseInterceptorCatch: (err) => {
      console.log("实例响应失败拦截");
      return err;
    },
  },
});

export default hyRequest;

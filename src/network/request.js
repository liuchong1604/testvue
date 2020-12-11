import Vue from "vue";
import axios from "axios";
import qs from "qs";

Vue.prototype.$qs = qs;
export function request(config) {
  const instance = axios.create({
    baseURL: "http://api.test.com/api", // 测试跨域解决方法
    withCredentials: true, // send cookies when cross-domain requests
    timeout: 8000
  });

  instance.interceptors.request.use(
    config => {
      return config;
    },
    err => {
      return Promise.reject(err);
    }
  );

  instance.interceptors.response.use(
    response => {
      if (
        response.status === 200 ||
        response.status === 201 ||
        response.status === 204
      ) {
        return response;
      } else {
        return Promise.reject(new Error("出现错误"));
      }
    },
    error => {
      return Promise.reject(error);
    }
  );

  return instance(config);
}

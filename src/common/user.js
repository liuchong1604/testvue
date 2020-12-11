import { request } from "@/network/request";

export function register(data) {
  return request({
    url: "/user/register",
    method: "Post",
    data,
    header: {
      "Content-Type": "application/json"
    }
  });
}

export function login(data) {
  return request({
    url: "/user/loginByPwd",
    method: "Post",
    data,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });
}

export function getInfoByToken(token) {
  return request({
    url: "/user/getInfoByToken",
    method: "Get",
    params: {
      token
    }
  });
}

export function findUserByPhoneOrName(data) {
  return request({
    url: "/user/findUser",
    method: "Post",
    data,
    header: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });
}

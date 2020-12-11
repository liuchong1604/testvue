import { request } from "../network/request";

export function sendSms(phone) {
  return request({
    url: "/user/sendVerifyCode",
    method: "Post",
    data: phone,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });
}

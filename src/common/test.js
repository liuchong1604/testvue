import { request } from "@/network/request";

export function testabc() {
  return request({
    url: "/values/createToken",
    method: "Get",
    params: {}
  });
}

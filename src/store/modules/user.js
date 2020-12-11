import { login, register } from "../../common/user";
import { getToken, setToken } from "../../common/auth";
import qs from "qs";

export default {
  state: {
    token: getToken(),
    phone: ""
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_PHONE: (state, phone) => {
      state.phone = phone;
    }
  },
  actions: {
    Login({ commit }, params) {
      return new Promise((resolve, reject) => {
        login(params)
          .then(res => {
            // const formData = qs.parse(params);
            qs.parse(params);
            // const data = formData.expire;
            let time = 1 / 48;
            // if (data == 1) {
            //   time = 7;
            // } else {
            //   time = 1 / 48;
            // }
            setToken(res.data.token, time);
            commit("SET_TOKEN", res.data.token);
            resolve(res);
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    Register({ commit }, params) {
      return new Promise((resolve, reject) => {
        register(params)
          .then(res => {
            let time = 1 / 48;
            setToken(res.data.token, time);
            commit("SET_TOKEN", res.data.token);
            resolve(res);
          })
          .catch(err => {
            reject(err);
          });
      });
    }
  }
};

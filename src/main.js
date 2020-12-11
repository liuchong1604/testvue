import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/icon/qrcode/iconfont.css";
import qs from "qs";

Vue.config.productionTip = false;
Vue.use(ElementUI);

Vue.prototype.$qs = qs;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

// 出现 warning  Delete `␍`  prettier/prettier 时使用npm run lint --fix解决

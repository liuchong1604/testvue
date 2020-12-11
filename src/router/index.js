import Vue from "vue";
import VueRouter from "vue-router";
import { getToken } from "../common/auth";

const originPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originPush.call(this, location).catch(err => err);
};

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Layout",
    component: () => import("../views/Layout.vue"),
    redirect: "/index/dashboard",
    children: [
      {
        path: "/index/dashboard",
        name: "dashboard",
        component: () => import("../views/DashBoard.vue")
      },
      {
        path: "/daohang1/tableData",
        name: "tableData",
        component: () => import("../views/TableData.vue")
      },
      {
        path: "/daohang1/tableData2",
        name: "tableData2",
        component: () => import("../views/TableData2.vue")
      },
      {
        path: "/user/settings",
        name: "settings",
        component: () => import("../views/Settings.vue")
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login")
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

const whiteList = ["/login"]; //不重定向名单
router.beforeEach((to, from, next) => {
  if (getToken()) {
    if (to.path === "/login") {
      next({
        path: "/"
      });
    } else {
      next();
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      //在白名单中
      next();
    } else {
      let path = to.path;
      path = path.replace(/\//gi, "%2F");
      console.log(path);
      next(`/login?redirect=${path}`); //否则全部重定向到登录页
    }
  }
});

export default router;

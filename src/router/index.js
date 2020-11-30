import Vue from "vue";
import VueRouter from "vue-router";

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
      }
    ]
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

export default router;

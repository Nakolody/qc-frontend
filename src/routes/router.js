import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../components/Home.vue")
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () =>
      import( "../components/Dashboard.vue")
  },
  {
      path: "/login",
      name: "login",
      component: () =>
        import("../components/Login.vue")
  },
  {
      path: "/registration",
      name: "registration",
      component: () => import("../components/Registeration.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  linkExactActiveClass: "text-white bg-gray-900",
  routes
});

export default router;
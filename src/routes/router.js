import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    meta: { requiresAuth: false },
    component: () => import("../components/Home.vue")
  },
  {
    path: "/login",
    name: "login",
    meta: { requiresAuth: false },
    component: () => import("../components/auth/Login.vue")
  },
  {
    path: "/logout",
    name: "logout",
    meta: { requiresAuth: false },
    component: () => import("../components/auth/Logout.vue")
  },
  {
    path: "/dashboard",
    name: "dashboard",
    meta: { requiresAuth: true },
    component: () => import( "../components/Dashboard.vue")
  },
  {
      path: "/registration",
      name: "registration",
      meta: { requiresAuth: true },
      component: () => import("../components/Registeration.vue")
  },
  {
      path:"/import",
      name: "import",
      meta: { requiresAuth: true},
      component: () => import('../components/Import.vue')
  },
  {
      path:"/graphs",
      name:"graphs",
      meta: { requiresAuth: true },
      component: () => import( "../components/Graphs.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  linkExactActiveClass: "text-white bg-gray-900",
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    // if (document.cookie.indexOf('XSRF-TOKEN') == -1) {//Check for the XSRF-TOKEN cookie
    //   next({
    //     path: '/login',
    //     query: { redirect: to.fullPath }
    //   })
    // } else {
    //   next()
    // }
        next()
  } else {
    next() // make sure to always call next()!
  }
  
})

export default router;
import Vue from 'vue';
import App from './App.vue';
import router from './routes/router';
import store from "./store/index";
import http from './http'
import VueApexCharts from "vue-apexcharts";
import './assets/tailwind.css'

Vue.use(VueApexCharts);
Vue.component("apexchart", VueApexCharts);

Vue.config.productionTip = false
Vue.prototype.$http = http

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

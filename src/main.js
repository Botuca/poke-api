import Vue from "vue";
import App from "./App.vue";
import vTitle from "vuejs-title";
import VueRouter from "vue-router";
import router from "./router";

Vue.use(VueRouter);
Vue.router = router;
Vue.use(vTitle);

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
}).$mount("#app");

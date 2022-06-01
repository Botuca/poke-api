import Vue from "vue";
import App from "./App.vue";
import vTitle from "vuejs-title";

Vue.config.productionTip = false;
Vue.use(vTitle);

new Vue({
  render: (h) => h(App),
}).$mount("#app");

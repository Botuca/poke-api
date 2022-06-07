import Vue from "vue";
import App from "./App.vue";
import vTitle from "vuejs-title";
import VueRouter from "vue-router";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faChevronRight, faChevronLeft);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(VueRouter);
Vue.router = router;
Vue.use(vTitle);

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
}).$mount("#app");

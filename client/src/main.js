import Vue from "vue";
import VueRouter from "vue-router";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbvue/build/css/mdb.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(VueRouter);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

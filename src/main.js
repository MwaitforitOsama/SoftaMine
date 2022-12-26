import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import PreLoader from "../src/components/PreLoader.vue";

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  components: {
    App,
    PreLoader,
  },
  template: "<Preloader><App /></Preloader>",
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");

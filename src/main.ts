import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { applyPolyfills, defineCustomElements } from "cs-materials/loader";

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/cs-\w*/];
applyPolyfills().then(() => {
  defineCustomElements(window);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

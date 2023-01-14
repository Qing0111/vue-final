import { createApp } from "vue";
import VueAxios from "vue-axios";
import axios from "axios";
import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import App from "./App.vue";
import router from "./router";
import { currency, date } from "./methods/filter";
import $httpMessageState from "./methods/pushMessageState";

const app = createApp(App);
app.config.globalProperties.$filters = {
  currency,
  date,
};
app.config.globalProperties.$httpMessageState = $httpMessageState;
app.use(VueAxios, axios);
app.use(router);
app.component("Loading", Loading);
app.mount("#app");

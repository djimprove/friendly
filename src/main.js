import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "../router";
import store from "./store";
import "@/assets/css/tailwind.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import moment from "moment";
// import dotenv from "dotenv";
// import { auth } from "../firebase.js";
// dotenv.config();
library.add(fas);

createApp(App)
  .use(store)
  .use(router)
  .component("fa", FontAwesomeIcon)
  .provide("moment", moment)
  .mount("#app");

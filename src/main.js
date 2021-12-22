import Vue from 'vue';
import vuetify from '@/plugins/vuetify';
import App from "@/App";
import Store from '@/store/Store';
import VueRouter from 'vue-router';
import router from '@/routes';
import '@/assets/app.scss';
import axios from "axios";
Vue.config.productionTip = false;
Vue.use(VueRouter);

axios.defaults.baseURL = 'http://localhost:3000/';

new Vue({
  render: h => h(App),
  vuetify,
  router,
  store: Store,
}).$mount('#app')


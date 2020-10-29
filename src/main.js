import Vue from 'vue';
import axios from 'axios';
import VueMeta from 'vue-meta';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/css/tailwind.css';
import '@/assets/css/main.scss';

Vue.config.productionTip = false;
Vue.use(VueMeta);

Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import config from '../config.js';

Vue.config.productionTip = false;

console.log('Management UI Active', config.currentEnv());

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

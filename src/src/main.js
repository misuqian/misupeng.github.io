import Vue from 'vue';
import App from './App.vue';
import router from './router';

import './assets/css/global.css'

export default new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App><App/>',
  render: h => h(App),
}).$mount('#app');

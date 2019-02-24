import Vue from 'vue';
import { Button } from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import VueLazyLoad from 'vue-lazyload';


import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(Button);
Vue.use(VueLazyLoad, {

});


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

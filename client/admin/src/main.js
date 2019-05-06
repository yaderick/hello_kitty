/* eslint-disable */
import Vue from 'vue';

import iView from 'iview';
import 'iview/dist/styles/iview.css';

import {VTable,VPagination} from 'vue-easytable'
import 'vue-easytable/libs/themes-base/index.css'

import App from './App.vue';
import router from './router';
import store from '@/store';

Vue.config.productionTip = false;

Vue.use(iView);
Vue.component(VTable.name, VTable)
Vue.component(VPagination.name, VPagination)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

import Vue from 'vue';
import {
  Button, Form, Grid, TextField, Select, Icon, Snackbar, Radio, Dialog,
} from 'muse-ui';

import Toast from 'muse-ui-toast';
import Loading from 'muse-ui-loading';
import Message from 'muse-ui-message';

import 'muse-ui/dist/muse-ui.css';
import 'muse-ui-loading/dist/muse-ui-loading.css';
import 'muse-ui-message/dist/muse-ui-message.css';

import VueLocalStorage from 'vue-ls'; // 读取缓存
import VueLazyLoad from 'vue-lazyload';
import VConsole from 'vconsole';


import App from './App.vue';
import router from './router';
import store from './store';

// 插件
Vue.use(Toast, {
  position: 'bottom',
  time: 20000,
  closeIcon: 'close',
  close: true,
  successIcon: 'check_circle',
  infoIcon: 'info',
  warningIcon: 'priority_high',
  errorIcon: 'warning',
});
Vue.use(Loading);
Vue.use(Message);

// UI库
Vue.use(Button);
Vue.use(Form);
Vue.use(Grid);
Vue.use(TextField); // input
Vue.use(Select);
Vue.use(Icon);
Vue.use(Snackbar);
Vue.use(Radio);
Vue.use(Dialog);

Vue.config.productionTip = false;

Vue.use(VueLocalStorage);
Vue.use(VueLazyLoad, {

});

const vConsole = new VConsole();
console.log(vConsole);

Vue.prototype.userName = '';

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

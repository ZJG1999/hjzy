import Vue from 'vue'
import Vant from 'vant';
// import Vant from 'vant';import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import 'vant/lib/index.css';
import App from './App.vue'
import router from './router'
// import axios from 'axios'
import { Dialog } from 'vant';

import store from './store'

Vue.use(Vant);
// Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

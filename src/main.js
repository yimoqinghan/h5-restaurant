import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant';
import { Lazyload } from 'vant';
import 'vant/lib/index.css';

Vue.use(Lazyload);
Vue.config.productionTip = false
Vue.use(Vant);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

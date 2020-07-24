import Vue from 'vue'
import App from './App.vue'

import {Swipe, SwipeItem,Lazyload,Image as VanImage} from 'vant'
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(VanImage);



import router from './router/index'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueLazyload from 'vue-lazyload';

import App from './App.vue';
import router from './router/router';
import store from './store/index';

import '@/utils/permission'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/icon/iconfont.css'
import '@/assets/style/common.css'

Vue.use(ElementUI);

//  图片懒加载 方式  src/ v-lazy
Vue.use(VueLazyload, {
  error: require('./assets/images/icon_loading.png'),
  loading: require('./assets/images/icon_loading.png'),
  attempt: 3, // 尝试加载图片数量
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import ViewUI from 'view-design'
import './index.less'

import _ from 'lodash'
import md5 from 'js-md5';
Vue.prototype.md5 = md5;
Vue.prototype._ = _

Vue.config.productionTip = false
Vue.use(ViewUI)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
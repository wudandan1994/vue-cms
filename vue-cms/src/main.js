import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'

import axios from 'axios'
import Vueaxios from 'vue-axios'

Vue.use(Vueaxios, axios)

// 引入的css
import './lib/mui/css/mui.css'
//初始化样式的css
import './lib/mui/css/common.css'
import './lib/mui/css/icons-extra.css'

// 引入顶部的组件
// import { Header } from 'mint-ui';
// Vue.component(Header.name, Header);

Vue.use(MintUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// import 
import App from './App'
import router from './router'
// 导入时间模块
import moment from 'moment'
// 定义全局时间过滤器,多个地方可以使用
Vue.filter('dateFormat',function(datestr,pattern="YYYY-MM-DD HH:mm:ss"){
   return moment(datestr).format(pattern)
})

import axios from 'axios'
import Vueaxios from 'vue-axios'

Vue.use(Vueaxios, axios)

// 引入全局的品论组件
import comments from './components/comments.vue'
// 注册全局组件
Vue.component("comments",comments)

// 引入缩略图的插件
import VuePreview from 'vue-pic-preview'
Vue.use(VuePreview)

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

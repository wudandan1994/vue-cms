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

// 导入Vuex并注册
import Vuex from 'vuex'
Vue.use(Vuex)
const store=new Vuex.Store({
  state:{
    car:[]
  },
  mutations:{
    getCarCount(state,goodsInfo){
      // 点击加入购物车,如果数据在购物车中存在,则修改数量就可以,如果不存在,就将数据push到state.car中

    //   以下是第一种方法      
      // let flag=false  用some方法将添加到购物车的数据追加到state.car中
      //   state.car.some(item=>{          
      //     if(item.id===goodsInfo.id){
      //       item.count+=parseInt(goodsInfo.count)
      //       return flag=true
      //     }        
      //   })
      //   if(!flag){
      //     state.car.push(goodsInfo)
      //   }



        




      // 第二种方法
      // findIndex的作用是用来根据条件查找索引
      // 如果goodsInfo在car中存在,就会返回goodsInfo的索引
      // 如果不存在返回-1
      let index=state.car.findIndex(item=>{
        item.id==goodsInfo.id
      })
      if(index==-1){
        state.car.push(goodsInfo)
      } else {
        // 表示找到了,在购物车中已经有了该商品,直接将数据相加就可以了
        state.car[index].count+=goodsInfo.id
      }

        
    }
  },
  getters:{}
})
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
  render: h => h(App),
  store
})

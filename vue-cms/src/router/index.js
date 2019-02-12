import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

// 将首页的组件导入到页面中
import homeComponent from '../pages/home'
import memberComponent from '../pages/member'
import shopcarComponent from '../pages/shopcar'
import searchComponent from '../pages/search'


Vue.use(Router)

export default new Router({
  routes: [
    // 重定向
    {path:'/',redirect:"/home"},
    {path:'/home',component:homeComponent},
    {path:'/member',component:memberComponent},
    {path:'/shopcar',component:shopcarComponent},
    {path:'/search',component:searchComponent},

  ],
  linkActiveClass:"mui-active"
})

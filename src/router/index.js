import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

// 将首页的组件导入到页面中
import homeComponent from '../pages/home'
import memberComponent from '../pages/member'
import shopcarComponent from '../pages/shopcar'
import searchComponent from '../pages/search'
import newsListComponent from '../pages/newsList'
import newsInfoComponent from '../pages/newsInfo'
import photoListCompoent from '../pages/photoList'
import photoInfoCompoent from '../pages/photoInfo'
import goodsListCompoent from '../pages/goodsList'
import goodsInfoCompoent from '../pages/goodsInfo'


Vue.use(Router)

export default new Router({
  routes: [
    // 重定向
    {path:'/',redirect:"/home"},
    {path:'/home',component:homeComponent},
    {path:'/member',component:memberComponent},
    {path:'/shopcar',component:shopcarComponent},
    {path:'/search',component:searchComponent},
    {path:'/home/newsList',component:newsListComponent},
    {path:'/home/newsInfo/:id',component:newsInfoComponent},
    {path:'/home/photoList',component:photoListCompoent},
    {path:'/home/photoInfo/:id',component:photoInfoCompoent},
    {path:'/home/goodsList',component:goodsListCompoent},
    {path:'/home/goodsInfo/:id',component:goodsInfoCompoent},
 


  ],
  linkActiveClass:"mui-active"
})

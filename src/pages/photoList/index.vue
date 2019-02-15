<template>
  <div class="photo-list">
      <!-- 头部导航区域 -->
        <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="['mui-control-item', {'mui-active':item.id==0?'mui-active':''}]"
                         v-for="(item, index) in categories"
                          :key="index" @click="getList(item.id)">
							{{item.title}}
						</a>					
					</div>
				</div>
		</div>
        <!-- 图片区域 -->
        <ul class="imgbox">
            <router-link v-for="(item, index) in cateImg"  tag="li" :to="'/home/photoInfo/'+item.id" :key="index">
                <img :src="item.img_url" v-lazy="item.img_url" alt="">
                <div class="beijing">
                    <h3>{{item.title}}</h3>
                    <p>{{item.zhaiyao}}</p>
                </div>
            </router-link>
        </ul>
 </div>
</template>
<script>
import mui from '../../lib/mui/js/mui.js'
//  Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode
// 严格模式下不支持 'caller', 'callee', and 'arguments'
export default {
    data() {
        return {
          categories:[] ,
          cateImg:[],
        }
    },
    mounted(){
        mui('.mui-scroll-wrapper').scroll({  // 初始化Mui的scroll.因为mui使用的是类选择器,所以只能在Mounted时期的声明周期函数,此时可以操作dom元素

	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
    },
    methods: {
        getCategories(){ // 获取分类的数据
            this.axios.get('http://vue.lovegf.cn:8899/api/getimgcategory')
            .then(res=>{
                res.data.message.unshift({title:"全部",id:0})
                this.categories=res.data.message
            })
        },
        getList(cateid){ // 获取分类的列表数据
             this.axios.get('http://vue.lovegf.cn:8899/api/getimages/'+cateid)
            .then(res=>{
                this.cateImg=res.data.message
            })
        }
    },
    created() {
        this.getCategories()
        this.getList(0)
    },
}
</script>
<style lang="less" scoped>
    * {
        touch-action: pan-y;
    }
    .photo-list {
        .imgbox {
            > li {
                position: relative;
                //  padding: 4px;
            }
            

            img {
                vertical-align: middle;
                width:100%;
                margin:9px;
                box-shadow: 0 0 6px #999;
            }
            img[lazy=loading] {
            width: 40px;
            height: 300px;
            margin: auto;
}
            .beijing {
                box-sizing: border-box;
                color:white;
                position: absolute;
                bottom: 9px;
                left:9px;

                background-color: rgba(0, 0, 0, .4);
                text-align: left;
                 >p {
                     font-size: 13px;
                     color:white;
                     text-indent: 2em;
                     max-height: 84px;
                 }
                 >h3 {
                     padding-bottom:10px;
                 }
            }
        }
    }
</style>

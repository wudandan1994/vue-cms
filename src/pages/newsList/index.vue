<template>
    <div class="news-List-Compontent">
      <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="(item, index) in newsList" :key="index">
					<router-link :to="'/home/newsInfo/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>
							<div class="togle">
                                <span>发表时间:{{item.add_time | dateFormat('YYYY-MM-DD')}}</span>
                                <span>点击次数:{{item.click}}</span>
                            </div>
						</div>
					</router-link>
				</li>
               
			</ul> 
           
        </div>
</template>

<script>
export default {
    data(){
        return {
            newsList:[]
        }
    },
    methods: {
        getnewsList(){
            this.axios.get("http://vue.lovegf.cn:8899/api/getnewslist")
            .then(res=>{
               
                // console.log(res);
                this.newsList=res.data.message
               
            })
        }
    },
    created(){
        this.getnewsList()
    }
};
</script>

<style lang="less" scoped>
   .news-List-Compontent {
       h1 {
           font-size:14px;
           font-weight: bold;
           color:#000;
           margin-bottom: 10px;
       }
       .togle {
           color:blue;
           font-size: 12px;
           display: flex;
           justify-content: space-around;
       }
   } 
</style>

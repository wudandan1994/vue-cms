<template>
   <div class="news-info-component">
       <!--头部  -->
        <h3 class="title">{{newsInfo.title}}</h3>
        <p class="togle">
            <span>发表时间:{{newsInfo.add_time | dateFormat}}</span>
            <span>点击:{{newsInfo.click}}次</span>
        </p>
        <hr>
        <!-- 内容部分 -->
        <div class="content" v-html="newsInfo.content"></div>
        <!-- 品论组件 -->
        <comments></comments>
   </div>
</template>

<script>
export default {
    data(){
        return {
            id:this.$route.params.id,
            newsInfo:{}
        }
    },
    methods: {
        getnewsInfo(){
             this.axios.get("http://vue.lovegf.cn:8899/api/getnew/"+this.id)
            .then(res=>{
              this.newsInfo=res.data.message[0]               
            })
        }
    },
    created(){
       this.getnewsInfo()
        
        
    }
}
</script>


<style lang="less">
    .news-info-component {
        padding:10px 4px;
        background-color: #fff;
        font-size: 18px;
        font-weight: bold;
        .title {
            color: red;
            
        }
        .togle {
            font-size: 14px;
            color:blue;
            display: flex;
            justify-content: space-between;
            margin-top:15px;
            margin-bottom: 15px;
        }
        .content {
            font-weight: 500;
            text-indent: 1em;
            img {
                width:100%;
            }
        }
    }
</style>

<template>
    <div class="pic-introduce">
        <h3> {{picIntroduce.title}} </h3>
        <hr>
        <div class="content" v-html="picIntroduce.content"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
           id:this.$route.params.id ,
           picIntroduce:{}
        }
    },
    methods: {
        getpicIntroduce(){
            this.axios.get("http://vue.lovegf.cn:8899/api/goods/getdesc/"+this.id)
            .then(res=>{
                console.log(res);
                
               if(res.data.status===0){
                  this.picIntroduce=res.data.message[0]                  
               }               
            })
        }
    },
    created() {
        this.getpicIntroduce();
    },
}
</script>

<style lang="less" >
    .pic-introduce {
        >h3 {
            color:#26a2ff;
            margin-top: 10px;
            margin-bottom: 10px;
            text-align: center;
            font-size: 16px;
            font-weight: bold;
        }
        >.content {
            img {
                width:100%;
                border:0;
            }
        }
    }
</style>

<template>
    <div class="photo-info">
        <h3>{{photoDetail.title}}</h3>    
        <p>
            <span>添加事件:{{photoDetail.add_time | dateFormat}}</span>    
            <span>点击次数:{{photoDetail.click}}</span>
        </p>  
        <hr>
    </div>
</template>
<script>
export default {
    data() {
        return {
          id:this.$route.params.id,
          photoDetail:[],
        }
    },
    methods: {
        getImgInfo(){
            this.axios.get('http://vue.lovegf.cn:8899/api/getimageInfo/'+this.id)
            .then(res=>{
               this.photoDetail=res.data.message[0]
            })
        }
    },
    created() {      
      this.getImgInfo();
    },
}
</script>
<style lang="less" scoped>
 .photo-info {
     >h3 {
         color:blue;
         text-align: center;
         margin-top:10px;
     }
 }
</style>

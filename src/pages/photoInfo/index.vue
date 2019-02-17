<template>
    <div class="photo-info">
        <h3>{{photoDetail.title}}</h3>    
        <p class="time">
            <span>发表时间:{{photoDetail.add_time | dateFormat}}</span>    
            <span>点击次数:{{photoDetail.click}}</span>
        </p>  
        <hr>
        <div class="pics">
             <img class="preview-img" v-for="(item, index) in getImgDetail" :key="index" :src="item.src" height="100" @click="$preview.open(index, getImgDetail)">
        </div>
        <comments></comments>
    </div>
</template>
<script>
export default {
    data() {
        return {
          id:this.$route.params.id,
          photoDetail:[],
          getImgDetail:[]
        }
    },
    methods: {
        getImgInfo(){
            this.axios.get('http://vue.lovegf.cn:8899/api/getimageInfo/'+this.id)
            .then(res=>{
               this.photoDetail=res.data.message[0]
            })
        },
        getImgDeta(){
             this.axios.get('http://vue.lovegf.cn:8899/api/getthumimages/'+this.id)
            .then(res=>{
              if(res.data.status===0){
                  res.data.message.forEach(element => {
                    element.w=600;
                    element.h=400;                      
                  });
                  this.getImgDetail=res.data.message;
              }
            })
        }
    },
    created() {      
      this.getImgInfo();
      this.getImgDeta();
    },
}
</script>
<style lang="less" scoped>
 .photo-info {
     >h3 {
         color:#26a2ff;
         font-weight: bold;
         margin-top: 10px;
         margin-bottom: 10px;
         text-align: center;
         margin-top:10px;
     }
     >.time {
         display: flex;
         justify-content: space-between;
         font-size: 14px;
     }
     >.pics {
         flex-direction: column;
         justify-content: space-between;
         >.preview-img {
             margin:20px;
         }
     }
 }
</style>

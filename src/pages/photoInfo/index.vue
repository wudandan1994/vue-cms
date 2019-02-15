<template>
    <div class="photo-info">
        <h3>photoInfo组件</h3>
    </div>
</template>
<script>
export default {
    data() {
        return {
           
        }
    },
    methods: {
        // getImgInfo(){
        //     this.axios.get('http://vue.lovegf.cn:8899/api/getimageInfo/'+this.id)
        //     .then(res=>{
        //        console.log(res);
               
        //     })
        // }
    },
    created() {
        console.log(this.id);
        
       
    },
}
</script>
<style>

</style>

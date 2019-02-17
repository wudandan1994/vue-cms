<template>
   <div class="comments">
        <h3>发表品论</h3>
        <hr>
        <textarea class="speak"  placeholder="请输入要BB的内容(最多吐槽120字)" v-model="content" maxlength="120"></textarea>
        <mt-button type="primary" size="large" @click="postComment">发表品论</mt-button>
         <div class="cmt-list">
      <div class="cmt-item" v-for="(item, i) in comments" :key="item.add_time">
        <div class="cmt-title">
          第{{ i+1 }}楼&nbsp;&nbsp;用户：{{ item.user_name }}&nbsp;&nbsp;发表时间：{{ item.add_time | dateFormat }}
        </div>
        <div class="cmt-body">
          {{ item.content=="undefined"?"这是个懒人,什么都没写":item.content }}
        </div>
      </div>

    </div>

         <mt-button type="danger" plain size="large" @click="loadMore">加载更多</mt-button>
   </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
    data(){
        return{
            id:this.$route.params.id,
            pageindex:1 ,// 默认显示的是第一页的品论
            comments:[],
            content:'',
        }
    },
    created(){
        this.getComments();       
    },
    methods:{
        getComments () {
            this.axios.get("http://vue.lovegf.cn:8899/api/getcomments/"+this.id+"?pageindex="+this.pageindex)
            .then(res=>{ 
            this.comments=this.comments.concat(res.data.message);
            })
        },
        loadMore(){
           this.pageindex++; // 点击加载更多就是改变了pageindex的值,但是之前的品论也是存在的.
           this.getComments();
        //    console.log(this.comments);  此时的this.comments被重新赋值,之前的值被覆盖了,所以只有一页数据 
        },
        postComment(){
            // 发表品论的功能
            this.axios.post("http://vue.lovegf.cn:8899/api/postcomment/"+this.id,{content:this.content})
            .then(res=>{ 
                if(res.data.status===0){
                    Toast(res.data.message)
                    this.pageindex=1;
                    this.comments=[];
                    this.getComments()
                    this.content=''
                }
            })
        }
    }
    
}
</script>

<style lang="less" scoped>
    .comments {
        h3 {
            text-align: left;
            margin-top:10px;
        }
        .speak {
            height: 80px;
        }
        .list {
            widows: 100%;
            height: 30px;
            line-height: 30px;
            margin:5px 0;
            font-size: 16px;
            font-weight: 500;
            background-color: #ccc;
            color:#8f8f94;
            text-align: left;
        }
    }
</style>

<template>
    <div class="goods-list">
        <div class="goods-deta" v-for="item in goodsList" :key="item.id">
            <img :src="item.img_url" @click="goodsInfo(item.id)"  >
            <p class="title">{{item.title}}</p>
            <div class="bottom">
                <div class="price">
                    <span class="new-price">￥{{item.sell_price}}</span>
                    <span class="old-price">￥{{item.market_price}}</span>
                </div>
                <div class="sell">
                    <span>热卖中</span>
                    <span>剩{{item.stock_quantity}}件</span>
                 </div>
            </div>
            
        </div>

        <!-- 加载更多去 -->
         <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>

    </div>
</template>
<script>
export default {
    data() {
        return {
            pageindex:1,
            goodsList:[]
        }
    },
    methods: {
        getgoodsList(){
            this.axios.get("http://vue.lovegf.cn:8899/api/getgoods?pageindex="+this.pageindex)
            .then(res=>{
               if(res.data.status===0){
                   this.goodsList=this.goodsList.concat(res.data.message)
               }
            })
        },  
        getMore(){
            this.pageindex++;
             this.getgoodsList()
        },
        goodsInfo(id){
           this.$router.push("/home/goodsInfo/"+id)
        }
    },
    created() {
        this.getgoodsList()
    },
}
</script>

<style lang="less" >
    .goods-list {
        display: flex;       
        flex-wrap: wrap;
        justify-content: space-between;
        padding:6px;
        background-color: #fff;
        >.goods-deta {
             width:49%;
             display: flex;
             flex-direction: column;
             justify-content: space-between;
             border:1px solid #ccc;
             box-shadow: 0 0 5px #ccc;
             margin-bottom: 10px;
            img {
                width:100%;
            }
            .title {
                text-align: center;
                font-size: 16px;
            }
            .bottom {
                 background-color: #eee;
                .price {
                display: flex;
                justify-content: space-around;
                margin:5px 0;
               
                >.new-price {
                    font-weight: bold;
                    color:red;
                }
                >.old-price {
                    text-decoration: line-through;
                }
            }
            
        }
            
        }
    }
</style>

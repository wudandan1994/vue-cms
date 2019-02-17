<template>
  
            <div class="mui-card">     
                 <!-- 轮播图部分 -->               
			    <div class="mui-card-header">                   
                   <mt-swipe class="swipe-box" :auto="4000">
                         <mt-swipe-item v-for="(item, index) in goodsInfo" :key="index">
                            <img  class="imgbox" :src="item.src" >
                         </mt-swipe-item>            
                     </mt-swipe>
                </div>

                <!-- 产品购买区域 -->
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<h3 class="title">{{goodsPrice.title}}</h3>
                        <hr>
                        <p class="price">
                            <span class="market-price">市场价:<del>￥{{goodsPrice.market_price}}</del></span>
                            <span class="sell-price">销售价:￥{{goodsPrice.sell_price}}</span>                          
                        </p>
                        <div class="buyCount">
                            购买数量:
                            <input type="button" @click="buygoodsnum >=2 && buygoodsnum--" value="-">
                            <input type="number" v-model="buygoodsnum" >
                            <input type="button" @click="buygoodsnum<goodsPrice.stock_quantity &&  buygoodsnum++" value="+">
                        </div>
                        <p class="buycar">
                            <mt-button type="primary" size="small">立即购买</mt-button>
                            <mt-button type="danger" size="small">加入购物车</mt-button>
                        </p>
					</div>
				</div>

            <!--  商品参数部分-->
				<div class="mui-card-footer">
                    <h3 class="goodsnum">商品参数</h3>
                    <hr>
                     <div class="goodstime">
                          <p>商品货号：{{goodsPrice.goods_no}}</p>
                          <p>库存情况：{{goodsPrice.stock_quantity}}</p>
                          <p>上架时间：{{goodsPrice.add_time}}</p>
                     </div>
                    <hr>
                    <div class="comments">
                         <mt-button  type="primary"   plain size="large">图文介绍</mt-button>
                        <mt-button class="goodscomments" type="danger" plain size="large">商品品论</mt-button>
                    </div>
                </div>

			</div>

</template>
<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      goodsInfo: [],
      goodsPrice:{},
      buygoodsnum:1,
    };
  },
  created() {
    this.getgoodsInfo();
    this.getgoodsPrice();
  },
  methods: {
     
    getgoodsInfo() {  // 获取轮播图图片
      // api/:imgid
      this.axios
        .get("http://vue.lovegf.cn:8899/api/getthumimages/" + this.id)
        .then(res => {
          if (res.data.status === 0) {
            this.goodsInfo = res.data.message;
          }
        });
    },
         getgoodsPrice(){  //获取商品参数区和价格，标题等数据
         this.axios
        .get("http://vue.lovegf.cn:8899/api/goods/getinfo/" + this.id)
        .then(res => {
            if (res.data.status === 0) {
            this.goodsPrice = res.data.message[0];
          }
        });
   }
  },
  
};
</script>

<style lang="less" scoped>
.mui-card {
  height: 100%;
  background-color: #fff;

   .swipe-box {
       width:100%;
       height: 300px;
    img {
      height: 100%;
      padding-top: 15px;
      padding-bottom: 15px;
      margin: 0 auto;
    }
  }
  .title {
      color:#000;
      font-size: 16px;
  }
  .price {
      margin:10px 0;
      display: flex;
      justify-content: space-between;
      >.sell-price {
          font-weight: bold;
          color:red;
      }
  }
  .buyCount {
     
     justify-content: flex-start;
      >input {
          width:40px;
          height:40px;        
          font-size: 20px;
          text-align: center;
          padding:0;
         
          >.buynum {
              line-height: 30px;
              display: inline-block;
              font-size: 30px
          }
      }
  }
  .buycar {
      display: flex;
      justify-content: flex-start;
  }
}
.mui-card-footer {
    display: block;
    text-align: left;
    >.goodstime {
        > P{
            line-height: 30px
        }
    }
    >.comments {
        margin-top:20px;
        >.goodscomments {
             margin-top:20px;
        }
    }
}
</style>

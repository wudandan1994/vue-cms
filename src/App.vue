<template>
  <div id="app">
   
    <!-- 头部内容 -->
    <mt-header fixed title="顶部·VUE"></mt-header>

    <!-- 中间组件切换 -->
    <transition name="changeComponent">
			<router-view/>
		</transition>

    

    <!-- 底部导航栏 -->
    <!-- 将a标签改为router-link标签 -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item1 " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item1"  to="/member">
        	<span class="mui-icon mui-icon-contact"></span>
			
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item1"  to="/shopcar">
        	<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" id="badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item1"  to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html {
	width:100%;
	height: 100%;
	background-color: #fff;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
	margin-top: 40px;
	margin-bottom: 50px;
	overflow-x: hidden;
}
.mui-bar-tab .mui-tab-item1.mui-active {
    color: #007aff;
}
.mui-bar-tab .mui-tab-item1 {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.changeComponent-enter {
	opacity: 0;
	transform: translateX(100%);
}
.changeComponent-leave-to {
	opacity: 0;
	transform: translateX(-100%);
	position: absolute;
}
.changeComponent-enter-active,
.changeComponent-leave-active {
	transition: all 0.5s ease;
}

</style>

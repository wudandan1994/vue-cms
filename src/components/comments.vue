<template>
   <div class="comments">
        <h3>发表品论</h3>
        <hr>
        <textarea class="speak"  placeholder="请输入要BB的内容(最多吐槽120字)" maxlength="120"></textarea>
        <mt-button type="primary" size="large">发表品论</mt-button>
        <ul>
            <li class="list">
                <p>
                    <span>第1楼</span>
                    <span>用户:匿名用户</span>
                    <span>发表时间:</span>
                </p>
                 </li>
                <p>品论人</p>
           
             <li class="list">
                <p>
                    <span>第2楼</span>
                    <span>用户:匿名用户</span>
                    <span>发表时间:</span>
                </p>
                 </li>
                <p>品论人</p>
           
             <li class="list">
                <p>
                    <span>第3楼</span>
                    <span>用户:匿名用户</span>
                    <span>发表时间:</span>
                </p>
                 </li>
                <p>品论人</p>
           
             <li class="list">
                <p>
                    <span>第4楼</span>
                    <span>用户:匿名用户</span>
                    <span>发表时间:</span>
                </p>
                 </li>
                <p>品论人</p>
           
        </ul>
         <mt-button type="danger" plain size="large">加载更多</mt-button>
   </div>
</template>

<script>
export default {
    
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

<template>
  <div class="footer">
    <!-- <p class="item">
      <van-icon name="wap-home-o"/>
      <span class="name">首页</span>
    </p>
    <p class="item" @click="goHref('/restaurant/rankingList')">
      <van-icon name="bar-chart-o" />
      <span class="name">排行榜</span>
    </p>
    <p class="item">
      <van-icon name="records"  />
      <span class="name">活动说明</span>
    </p> -->
    <van-tabbar v-model="activeTagName" active-color="#1989fa" inactive-color="#000">
      <van-tabbar-item name="home" replace to="/" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item name="ranking" replace to="/restaurant/rankingList" icon="bar-chart-o">排行榜</van-tabbar-item>
      <van-tabbar-item name="active-description" replace to="/restaurant/rule" icon="records">活动说明</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  props: {
    activeName:{
      type:String,
      default:'home'
    }
  },
  watch:{
    activeName:{
      immediate:true,
      handler(val){
        console.log(val)
        if(val){
          console.log('val',val)
          this.activeTagName = val
        }
      }
    }
  },
  data(){
    return {
      activeTagName:'home',
    }
  },
  methods:{
    
  }
}
</script>
<style >
  /* .footer{
    position: fixed;
    left:0;
    bottom:0;
    background-color: #f5f5f5;
    width:100%;
    height:1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0.1rem -0.02rem 0.1rem rgba(0,0,0,0.2);
  } */
  /* .item{
    height:100%;
    text-align: center;
    width: 30%;
    box-sizing: border-box;
    padding-top:0.15rem;
    margin:0;
  }
  .item .van-icon{
    font-size:0.4rem;
  }
  .name{
    font-size:0.24rem;
    color: black;
    display:block;
    text-align: center;
  } */
</style>

<template>
  <div id="app">
    <van-notice-bar
      left-icon="volume-o"
      text="特此通知：本集团餐厅于****年**月**日开启美食菜系评比活动，望集团员工积极参加，评选出自己心目中的美食！！！"
    />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
body,html{
  width: 100%;
  height:100%;
  background-color: #f5f5f5;
  /* background-color: #e33d3d; */
}
#app {
  width: 100%;
  height:100%;
  /* padding-top:0.8rem; */
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* padding-bottom:50px; */
  box-sizing: border-box;
}
.van-notice-bar{
  position: fixed !important;
  left:0;
  top:0;
  z-index: 10;
  width: 100%;
  box-sizing: border-box;
  background-color: #1989fa !important;
  color:#fff !important;
}
.van-notice-bar__content{
  color:#fff;
}
</style>

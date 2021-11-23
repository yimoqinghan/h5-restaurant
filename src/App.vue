<template>
  <div id="app">
    <van-notice-bar
      left-icon="volume-o"
      text="特此通知：本集团餐厅于****年**月**日开启美食菜系评比活动，望集团员工积极参加，评选出自己心目中的美食！！！"
    />
    <router-view></router-view>
    <van-button type="info"   size="small" class="backTop" @click="backTop" v-show="flag_scroll">
        <van-icon name="arrow-up" size="20" />
    </van-button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      flag_scroll:false,
      scrollTop:0,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, true)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  watch:{
   $route:() => {
    document.documentElement.scrollTop = document.body.scrollTop = 0;
   }
  },
  methods:{
    handleScroll(){
      const vm = this
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      vm.scrollTop = scrollTop
      if (vm.scrollTop >60) {
        vm.flag_scroll = true
      } else {
        vm.flag_scroll = false
      }
    },
    backTop(){
      const that = this
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
        if (that.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 16)
    }
  }
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
.van-button.backTop{
  position: fixed;
  right:0.1rem;
  bottom:1.2rem;
  z-index: 9;
}
</style>

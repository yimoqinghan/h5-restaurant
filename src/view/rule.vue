<template>
  <div id="rule">
    <div class="rule-wrap">
      <p class="title">活动简介</p>
      <p class="content">内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1
        内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1
        内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1
      </p>
      <p class="title">评选规则</p>
      <p class="content">内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1
        内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1
        内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1
      </p>
      <p class="title">投票时间</p>
      <p class="content">2021年12月7日 08:00 - 2021年12月29日 23:00 </p>
      <p class="title">主办单位</p>
      <p class="content">股份公司工会</p>
      <p class="title">投票须知</p>
      <p class="content">
        <span>活动投票仅限内部人员参与</span> <br>
        <span class="t1">请勿发送给相关人员拉票</span><br>
        <span class="t1">严禁各种刷票行为</span>
      </p>
    </div>
    <FooterItem :activeName="activeName" />
  </div>
</template>
<script>
import footerC from '@/components/footerC.vue'
export default {
  data(){
    return {
      activeName:'active-description',
    }
  },
  components:{
    FooterItem:footerC
  },
}
</script>
<style scoped>
  #rule{
    padding:1rem 0.25rem 70px;
    /* padding:0.2rem 0.25rem; */
  }
  .rule-wrap{
    background-color: #fff;
    padding:0 0rem 0.15rem;
    border-radius: 0.08rem;
  }
  p{
    margin:0;
  }
  .title{
    background-color: #1989fa;
    text-align: left;
    font-size:0.32rem;
    color:#fff;
    padding:0.1rem 0.15rem;
  }
  .content{
    text-indent: 0.46rem;
    text-align: left;
    font-size:0.28rem;
    padding:0.1rem 0.15rem;
    line-height:0.42rem;
  }
  .content span.t1{
    text-indent: 0.46rem;
    display: inline-block;
  }
</style>
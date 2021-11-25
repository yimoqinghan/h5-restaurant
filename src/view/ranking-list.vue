<template>
  <div id="ranking">
    <img v-lazy="img" class="vote-main-img"/>
    <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0.2rem 0.32rem' }">
      实时排名
    </van-divider>
    <div class="ranking-wrap">
      <van-tabs v-model="activeType">
        <van-tab title="面点" name="type1"></van-tab>
        <van-tab title="菜肴" name="type2"></van-tab>
      </van-tabs>
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        style="margin-top:0.2rem"
      >
        <p  class="list tt">
          <span class="rank tt">排名</span>
          <span class="name tt td">{{activeType == 'type1'?'面点名':'菜名'}}</span>
          <!-- <span class="num tt">票数</span> -->
        </p>
        <p v-for="(item,index) in rankingList[activeType]" :key="index" class="list bd">
          <span class="rank">{{item.rank}}</span>
          <span class="name">{{item.name}}</span>
          <!-- <span class="num">{{item.num}}票</span> -->
        </p>
      </van-list>
    </div>
    <FooterItem :activeName="activeName" />
  </div>
</template>
<script>
import footerC from '@/components/footerC.vue'
export default {
  data(){
    return{
      img:require('@/statics/img/res.jpg'),
       activeName:'ranking',
       loading: false,
       finished: false,
       activeType:'type1',
       rankingList:{
         type1:[
           {
              rank:1,
              name:'臊子面',
              num:1111,
            },
            {
              rank:2,
              name:'裤带面',
              num:899,
            },
            {
              rank:3,
              name:'肉夹馍',
              num:764,
            },
            {
              rank:4,
              name:'炒饼',
              num:349,
            },
            {
              rank:5,
              name:'卤面',
              num:290,
            },
            {
              rank:6,
              name:'牛肉面',
              num:180,
            },
            {
              rank:7,
              name:'biangbiang面',
              num:100,
            },
            {
              rank:8,
              name:'刀削面',
              num:5,
            },
         ],
         type2:[
           {
              rank:1,
              name:'狮子头',
              num:2193,
            },
            {
              rank:2,
              name:'佛跳墙',
              num:1899,
            },
            {
              rank:3,
              name:'红烧肉',
              num:1764,
            },
            {
              rank:4,
              name:'炖猪蹄',
              num:449,
            },
            {
              rank:5,
              name:'黄焖鸡米饭',
              num:190,
            },
            {
              rank:6,
              name:'铁锅乱炖',
              num:80,
            },
            {
              rank:7,
              name:'地锅鸡',
              num:50,
            },
            {
              rank:8,
              name:'宫保鸡丁',
              num:23,
            },
         ]
       }
    }
  },
  components:{
    FooterItem:footerC
  },
  mounted(){
    this.onLoad();
  },
  methods:{
    onLoad() {
      setTimeout(() => {
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        this.finished = true;
      }, 1000);
    },
  }
}
</script>
<style scoped>
  #ranking{
    padding:0.8rem 0 50px;
  }
  #ranking >>> .vote-main-img{
    width: 100%;
    height:4rem;
  }
  .ranking-wrap{
    width: 88%;
    margin:0 auto 0.2rem;
    background-color: #fff;
    border-radius:0.1rem;
    padding:0rem 0.2rem;
  }
  #ranking >>> .van-tabs__wrap{
    font-size: 0.4rem;
    color: black;
    font-weight: bold;
  }
  #ranking >>> .van-tabs__wrap .van-tab--active{
    color:#1989fa;
    font-weight: bold;
  }
  .list{
    width: 100%;
    height:0.4rem;
    margin:0;
  }
  .list span{
    display: inline-block;
    font-size:0.3rem;
    text-align: center;
    line-height: 0.4rem;
  }
  .rank{
    width: 30%;
    color:black;
    font-weight: bold;
  }
  .name{
    color: #cccc;
    width: 70%;
  }
  .num{
    color: #1989fa;
    width: 20%;
  }
  .list.tt{
    background-color: #f5f5f5;
    padding:0.15rem 0;
  }
  .list span.tt{
    color:black;
    font-weight:bold;
    font-size:0.32rem;
  }
  .list.bd{
    border-bottom:0.02rem solid #ccc;
    padding:0.2rem 0;
  }
  #ranking >>> .van-tabs__line{
    background-color:#1989fa;
  }
</style>
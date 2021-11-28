<template>
  <div id="ranking">
    <img v-lazy="img" class="vote-main-img"/>
    <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0.2rem 0.32rem' }">
      实时排名
    </van-divider>
    <div class="ranking-wrap">
      <van-tabs v-model="activeType">
        <van-tab title="面点" name="pastryRankList"></van-tab>
        <van-tab title="菜肴" name="dishRankList"></van-tab>
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
          <span class="name tt td">{{activeType == 'pastryRankList'?'面点名':'菜名'}}</span>
          <!-- <span class="num tt">票数</span> -->
        </p>
        <p v-for="(item,index) in rankList[activeType]" :key="index" class="list bd">
          <span class="rank">{{item.rank}}</span>
          <span class="name">{{item.foodName}}</span>
          <!-- <span class="num">{{item.num}}票</span> -->
        </p>
      </van-list>
    </div>
    <FooterItem :activeName="activeName" />
  </div>
</template>
<script>
import footerC from '@/components/footerC.vue'
import {foodRank} from '@/utils/api'
export default {
  data(){
    return{
      img:require('@/statics/img/res.jpg'),
       activeName:'ranking',
       loading: false,
       finished: false,
       activeType:'pastryRankList',
       rankList:{},
    }
  },
  components:{
    FooterItem:footerC
  },
  mounted(){
    this.onLoad();
    this.foodRank()
  },
  methods:{
    foodRank(){
      foodRank()
      .then(res => {
        if(res.error == null){
          this.rankList = res;
        }
      })
    },
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
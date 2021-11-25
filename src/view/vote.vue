<template>
  <div id="vote">
    <img v-lazy="img" class="vote-main-img"/>
    <div class="content-wrap">
      <van-search
        v-model="searchValue"
        background="rgb(235, 177, 137);;"
        placeholder="请输入搜索关键词"
        clearable
      />
      <van-tabs v-model="activeType">
        <van-tab title="精致面点" name="type1">
          <div class="item-list">
            <div class="item">
              <img v-lazy="img1" class="vote-img"/>
              <p class="title">油爆狮子头</p>
              <!-- <p class="num">111票</p> -->
              <div class="btn">
                <van-icon name="good-job"  size="0.35rem"/>
                <span @click="voteFn">投票</span>
              </div>
            </div>
            <div class="item">
              <img v-lazy="img2" class="vote-img"/>
              <p class="title">大螃蟹</p>
              <!-- <p class="num">132票</p> -->
              <div class="btn">
                <van-icon name="good-job" size="0.35rem"/>
                <span @click="voteFn">投票</span>
              </div>
            </div>
          </div>
          <div class="item-list">
            <div class="item">
              <img v-lazy="img1" class="vote-img"/>
              <p class="title">油爆狮子头</p>
              <!-- <p class="num">111票</p> -->
              <div class="btn">
                <van-icon name="good-job"  size="0.35rem"/>
                <span @click="voteFn">投票</span>
              </div>
            </div>
            <div class="item">
              <img v-lazy="img2" class="vote-img"/>
              <p class="title">大螃蟹</p>
              <!-- <p class="num">132票</p> -->
              <div class="btn">
                <van-icon name="good-job" size="0.35rem"/>
                <span @click="voteFn">投票</span>
              </div>
            </div>
          </div>
          <div class="item-list">
            <div class="item">
              <img v-lazy="img1" class="vote-img"/>
              <p class="title">油爆狮子头</p>
              <!-- <p class="num">111票</p> -->
              <div class="btn">
                <van-icon name="good-job"  size="0.35rem"/>
                <span @click="voteFn">投票</span>
              </div>
            </div>
            <div class="item">
              <img v-lazy="img2" class="vote-img"/>
              <p class="title">大螃蟹</p>
              <!-- <p class="num">132票</p> -->
              <div class="btn">
                <van-icon name="good-job" size="0.35rem"/>
                <span @click="voteFn">投票</span>
              </div>
            </div>
          </div>
          <div class="item-list">
            <div class="item">
              <img v-lazy="img1" class="vote-img"/>
              <p class="title">油爆狮子头</p>
              <!-- <p class="num">111票</p> -->
              <div class="btn">
                <van-icon name="good-job"  size="0.35rem"/>
                <span @click="voteFn">投票</span>
              </div>
            </div>
            <div class="item">
              <img v-lazy="img2" class="vote-img"/>
              <p class="title">大螃蟹</p>
              <!-- <p class="num">132票</p> -->
              <div class="btn">
                <van-icon name="good-job" size="0.35rem"/>
                <span @click="voteFn">投票</span>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="饕餮佳肴" name="type2">
          <div class="item-list">
            <div class="item">
              <img v-lazy="img3" class="vote-img"/>
              <p class="title">地锅鸡</p>
              <!-- <p class="num">121票</p> -->
              <div class="btn">
                <van-icon name="good-job"  size="0.35rem"/>
                <span @click="voteFn">投票</span>
              </div>
            </div>
            <div class="item">
              <img v-lazy="img4" class="vote-img"/>
              <p class="title">佛跳墙</p>
              <!-- <p class="num">3412票</p> -->
              <div class="btn">
                <van-icon name="good-job" size="0.35rem"/>
                <span @click="voteFn">投票</span>
              </div>
            </div>
          </div>
          <div class="item-list">
            <div class="item">
              <img v-lazy="img3" class="vote-img"/>
              <p class="title">地锅鸡</p>
              <!-- <p class="num">121票</p> -->
              <div class="btn">
                <van-icon name="good-job"  size="0.35rem"/>
                <span @click="voteFn">投票</span>
              </div>
            </div>
            <div class="item">
              <img v-lazy="img4" class="vote-img"/>
              <p class="title">佛跳墙</p>
              <!-- <p class="num">3412票</p> -->
              <div class="btn">
                <van-icon name="good-job" size="0.35rem"/>
                <span @click="voteFn">投票</span>
              </div>
            </div>
          </div>
          <div class="item-list">
            <div class="item">
              <img v-lazy="img3" class="vote-img"/>
              <p class="title">地锅鸡</p>
              <!-- <p class="num">121票</p> -->
              <div class="btn">
                <van-icon name="good-job"  size="0.35rem"/>
                <span @click="voteFn">投票</span>
              </div>
            </div>
            <div class="item">
              <img v-lazy="img4" class="vote-img"/>
              <p class="title">佛跳墙</p>
              <!-- <p class="num">3412票</p> -->
              <div class="btn">
                <van-icon name="good-job" size="0.35rem"/>
                <span @click="voteFn">投票</span>
              </div>
            </div>
          </div>
          <div class="item-list">
            <div class="item">
              <img v-lazy="img3" class="vote-img"/>
              <p class="title">地锅鸡</p>
              <!-- <p class="num">121票</p> -->
              <div class="btn">
                <van-icon name="good-job"  size="0.35rem"/>
                <span @click="voteFn">投票</span>
              </div>
            </div>
            <div class="item">
              <img v-lazy="img4" class="vote-img"/>
              <p class="title">佛跳墙</p>
              <!-- <p class="num">3412票</p> -->
              <div class="btn">
                <van-icon name="good-job" size="0.35rem"/>
                <span @click="voteFn">投票</span>
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <FooterItem :activeName="activeName" />
  </div>
</template>
<script>
import footerC from '@/components/footerC.vue'
export default {
  data(){
    return {
      img:require('@/statics/img/res.jpg'),
      searchValue:'',
      activeName:'',
      activeType:'type1',
      img1:require('@/statics/img/1.jpg'),
      img2:require('@/statics/img/2.jpg'),
      img3:require('@/statics/img/3.jpg'),
      img4:require('@/statics/img/4.jpg'),
    }
  },
  components:{
    FooterItem:footerC
  },
  methods:{
    voteFn(){
      this.$router.push({
        path:'/restaurant/login'
      })
    }
  }
}
</script>
<style scoped>
#vote{
  padding:0.8rem 0 50px;
  background-color:rgb(235, 177, 137);
}
#vote >>> .van-tabs__nav{
  background-color:rgb(235, 177, 137);
}
  #vote >>> .vote-main-img{
    width: 100%;
    height:4rem;
  }
  .content-wrap{
    width: 95%;
    margin:0 auto 0.2rem;
    background-color: rgb(235, 177, 137);
    padding:0.2rem 0;
  }
  #vote >>> .van-search{
    background-color: rgb(235, 177, 137);
  }
  #vote >>> .van-tabs__line{
    background-color:rgb(169,77,72);
  }
  #vote >>> .van-tabs__wrap .van-tab--active{
    color:rgb(169,77,72);
    font-weight: bold;
  }
  .item-list{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:0.15rem;
    margin-bottom:0.2rem;
  }
  .item{
    width: 49%;
  }
  .item img.vote-img{
    width: 100%;
    height:2.5rem;
  }
  .item p{
    margin:0;
  }
  .item .title{
    text-align: left;
    font-size:0.3rem;
    margin-bottom:0.15rem;
  }
  .item .num{
    text-align: center;
    font-size:0.28rem;
    color:#1989fa;
    margin:0.15rem;
  }
  .btn{
    width:70%;
    background-color: rgb(169,77,72);
    color:rgb(238,199,157);
    margin:0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.4rem;
    padding:0.1rem 0.2rem;
    box-sizing: border-box;
  }
  .btn span{
    font-size:0.32rem;
    display: inline-block;
    margin-left:0.15rem;
    color:rgb(238,199,157);
  }
</style>
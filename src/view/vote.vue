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
        <van-tab title="精致面点" name="pastryList">
          <div class="item-list">
            <div class="item" v-for="(foodItme,index) in foodList.pastryList" :key="index">
              <img :src="foodItme.img" class="vote-img"/>
              <p class="title">{{foodItme.name}}</p>
              <div class="btn">
                <van-icon name="good-job"  size="0.35rem"/>
                <span @click="foodVote(foodItme.id)">投票</span>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="饕餮佳肴" name="dishList">
          <div class="item-list">
            <div class="item" v-for="(foodItme,index) in foodList.dishList" :key="index" >
              <img :src="foodItme.img" class="vote-img"/>
              <p class="title">{{foodItme.name}}</p>
              <div class="btn">
                <van-icon name="good-job"  size="0.35rem"/>
                <span @click="foodVote(foodItme.id)">投票</span>
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
import {foodVote,foodList} from '@/utils/api'
export default {
  data(){
    return {
      img:require('@/statics/img/res.jpg'),
      searchValue:'',
      activeName:'',
      activeType:'pastryList',
      foodList:{},
    }
  },
  components:{
    FooterItem:footerC
  },
  mounted(){
    this.foodListFn();
  },
  methods:{
    foodListFn(){
      foodList()
      .then(res => {
        if(res.error == null){
          this.foodList = res
        }
      })
    },
    foodVote(foodId){
      foodVote(foodId)
      .then(res => {
        if(res.error == null){
          this.$toast('投票成功！')
        }else{
          this.$toast(res.error.msg)
        }
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
    flex-wrap:wrap;
  }
  .item{
    width: 49%;
    margin-bottom:0.25rem;
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
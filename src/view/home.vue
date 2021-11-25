<template>
    <div id="home">
        <div class="home-main-wrap">
            <van-image class="main-img"  :src="mainImg"  fit="contain"/>
            <!-- <van-grid :column-num="2">
                <van-grid-item    @click="goHref('/restaurant/list')">
                    <span>美食地图</span>
                </van-grid-item>
                <van-grid-item   @click="goHref('/restaurant/vote')">
                    <span>点击投票</span>
                </van-grid-item>
            </van-grid> -->
            <div class="grid-btn-wrap">
                <span @click="goHref('/restaurant/list')">美食地图</span>
                <span @click="goHref('/restaurant/vote')">点击投票</span>
            </div>
        </div>
        
        <!-- <div class="nav-item" @click="goHref('/restaurant/list')">
            <span class="nav-name">餐厅介绍</span>
            <span class="icon"></span>
        </div>
        <div class="nav-item nav-p" @click="goHref('/restaurant/vote')">
            <span class="nav-name">点击投票</span>
            <span class="icon"></span>
        </div> -->
        <FooterItem :activeName="activeName"/>
    </div>
</template>
<script>
import footerC from '@/components/footerC.vue'
export default {
    data(){
        return {
            activeName:'home',
            mainImg:require('@/statics/img/res.jpg'),
        }
    },
    components:{
        FooterItem:footerC
    },
    methods:{
        goHref(val){
            this.$router.push({
                path:val
            })
        }
    }
}
</script>
<style scoped>
    #home{
        background-color: #f5f5f5;
        padding:0.8rem 0 50px;
        height: 100%;
        box-sizing: border-box;
        font-size: 0;
        /* position: relative; */
    }
    #home >>> .van-grid-item__content{
        background-color: transparent;
    }
    .home-main-wrap{
        width: 100%;
        position: absolute;
        left: 0;
        top:50%;
        transform: translateY(-50%);
    }
    .main-img img{
        width: 100%;
    }
    .nav-item{
        position: fixed;
        left:0;
        top:1.5rem;
        z-index:11;
        background: rgba(0,0,0,.5);
        color:#fff;
        width: 2.5rem;
        height:0.8rem;
        overflow: hidden;
    }
    .nav-p{
        top:3rem;
    }
    .nav-item span.nav-name{
        display: inline-block;
        width: 100%;
        height:100%;
        line-height: 0.8rem;
        text-align: left;
        padding-left:0.4rem;
        box-sizing: border-box;
        font-size:0.3rem;
    }
    .nav-item span.icon{
        display: inline-block;
        position: absolute;
        right:-0.4rem;
        top:0;
        width: 0.8rem;
        height:0.8rem;
        transform: rotate(-45deg);
        background-color: #1989fa;
        opacity: 0.7;
    }
    .grid-btn-wrap{
        width: 100%;
        height:1.3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fff;
    }
    .grid-btn-wrap span{
        display: inline-block;
        font-size: 0.32rem;
        color:#f3453a;
        padding:0.15rem 0.35rem;
        border:0.08rem solid #1f0d23;
        border-radius: 0.25rem;
        font-weight:bold;
        background:linear-gradient(to right, #f89f45, #fa5247);
        box-shadow: 0.02rem 0.02rem 0.02rem #1f0d23;
    }
    .grid-btn-wrap span:first-child{
        margin-right:0.8rem;
    }
</style>
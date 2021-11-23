<template>
    <div id="home">
        <van-image class="main-img"  v-for="(item,index) in images" :key="index" :src="item.img"  fit="contain"/>
        <!-- <van-grid :column-num="2">
            <van-grid-item  text="餐厅介绍"  @click="goHref('/restaurant/list')"/>
            <van-grid-item  text="点击投票" @click="goHref('/restaurant/vote')"/>
        </van-grid> -->
        <div class="nav-item" @click="goHref('/restaurant/list')">
            <span class="nav-name">餐厅介绍</span>
            <span class="icon"></span>
        </div>
        <div class="nav-item nav-p" @click="goHref('/restaurant/vote')">
            <span class="nav-name">点击投票</span>
            <span class="icon"></span>
        </div>
        <FooterItem :activeName="activeName"/>
    </div>
</template>
<script>
import footerC from '@/components/footerC.vue'
export default {
    data(){
        return {
            activeName:'home',
            images: [
                {
                    img:require('@/statics/img/p1.jpg'),
                    name:'飞黄腾达'
                },
                {
                    img:require('@/statics/img/p2.jpg'),
                    name:'蟹行天下'
                }
            ]
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
    }
    .main-img{
        margin-top:-0.08rem;
    }
    .main-img:first-child{
        margin-top:0;
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
</style>
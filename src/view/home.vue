<template>
    <div id="home">
        <van-image class="main-img"  v-for="(item,index) in images" :key="index" :src="item.img"  fit="contain"/>
        <van-grid :column-num="2">
            <van-grid-item  text="餐厅介绍"  @click="goHref('/restaurant/list')"/>
            <van-grid-item  text="点击投票" @click="goHref('/restaurant/vote')"/>
        </van-grid>
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
                    img:require('@/statics/img/1.jpg'),
                    name:'飞黄腾达'
                },
                {
                    img:require('@/statics/img/2.jpg'),
                    name:'蟹行天下'
                },
                {
                    img:require('@/statics/img/3.jpg'),
                    name:'东坡酥肉'
                },
                {
                    img:require('@/statics/img/4.jpg'),
                    name:'小瓜囊肿'
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
</style>
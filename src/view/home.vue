<template>
    <div id="home">
        <van-image class="main-img"  v-for="(item,index) in images" :key="index" :src="item.img"  fit="contain"/>
        <div class="page-btn">

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
                    img:require('@/statics/img/1.jpg'),
                    name:'飞黄腾达'
                },
                {
                    img:require('@/statics/img/2.jpg'),
                    name:'蟹行天下'
                }
                ,
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

    }
}
</script>
<style scoped>
    .main-img{
        margin-top:-0.08rem;
    }
    .main-img:first-child{
        margin-top:0;
    }
    .main-img img{
        width: 100%;
    }
    .page-btn{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding:0.2rem 0.32rem;
    }
</style>
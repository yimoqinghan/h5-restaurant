<template>
    <div>
        <van-button style="margin:0 auto;" size="large" type="primary" @click="sendSms">登录</van-button>
        <p class="title">菜品</p>
        <van-grid square direction="horizontal" :column-num="2" :gutter="10">
            <van-grid-item v-for="(item,index) in images" :key="index" class="grid-fix-wrap">
                <van-image class="img" :src="item.img" />
                <p class="content">
                    <span class="name">{{item.name}}</span>
                    <van-icon class="img-icon" @click="likeFn" name="like-o" size="20" color="red"/>
                </p>
            </van-grid-item>
        </van-grid>
    </div>
</template>
<script>
export default {
    data(){
        return {
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
    methods:{
        likeFn(){
            this.$router.push({
                path:'/restaurant/login'
            })
        },
        sendSms(){
            this.$router.push({
                path:'/restaurant/login'
            })
        }
    }
}
</script>
<style scoped>
    .title{
        text-align: center;
        font-size: 0.32rem;
        font-weight: bold;
    }
    .img,.img .van-image__img{
        widows: 100%;
        height:100%;
    }
    .grid-fix-wrap{
        border-radius: 0.08rem !important;
    }
    .grid-fix-wrap .van-grid-item__content{
        position: relative;
        left:0;
        top:0;
        
    }
    .content{
        width: 100%;
        height:0.5rem;
        position: absolute;
        right: 0rem;
        bottom:0rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background: darkgray;
        box-shadow: 0.1rem 0.05rem 0.1rem #ccc;
    }
    .content span.name{
        font-size: 0.28rem;
        font-weight: 500;
        display: inline-block;
        margin-right:0.5rem;
    }
</style>
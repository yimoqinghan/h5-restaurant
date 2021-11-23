<template>
    <div id="restaurant-list">
        <img v-lazy="img" class="vote-main-img"/>
        <van-grid :column-num="3" :gutter="10" class="res-list-wrap" square >
            <van-grid-item @click="chooseResFn(item)" v-for="(item,index) in images" :key="index">
                <van-image v-if="index != 4" :src="item" />
            </van-grid-item>
        </van-grid>
        <!-- 模态框 -->
        <van-dialog v-model="show" title="餐厅介绍" :show-cancel-button="false" :showConfirmButton="false" closeOnClickOverlay>
            <van-swipe :autoplay="3000">
                <van-swipe-item v-for="(image, index) in images" :key="index">
                    <img v-lazy="image" />
                </van-swipe-item>
            </van-swipe>
            <p class="name">
                <span>好利来餐厅</span>
                <van-icon :name="iconName"  size="0.45rem" :color="iconColor" @click="likeR"/>
            </p>
            <p class="content">好利来餐厅的饭最好吃好利来餐厅的饭最好吃好利来餐厅的饭最好吃好利来餐厅的饭最好吃好利来餐厅的饭最好吃好利来餐厅的饭最好吃好利来餐厅的饭最好吃...</p>
            <van-divider content-position="left" :style="{borderColor:'#1989fa',color: '#1989fa'}" dashed >推荐面点</van-divider>
            <div class="food-img-wrap">
                <van-image
                    width="3.5rem"
                    height="3.5rem"
                    lazy-load
                    :src="fooImg1"
                />
                <p class="food-name">金玉满堂</p>
            </div>
            <van-divider content-position="left" dashed :style="{borderColor:'#1989fa',color: '#1989fa'}" >推荐菜肴</van-divider>
            <div class="food-img-wrap">
                <van-image
                    width="3.5rem"
                    height="3.5rem"
                    lazy-load
                    :src="fooImg2"
                />
                <p class="food-name">鳗鱼春光</p>
            </div>
        </van-dialog>
        <FooterItem :activeName="activeName"/>
    </div>
</template>
<script>
import footerC from '@/components/footerC.vue'
export default {
    data(){
        return {
            show:false,
            iconName:'good-job-o',
            iconColor:'#2c3e50',
            activeName:'',
            img:require('@/statics/img/main.jpg'),
            fooImg1:require('@/statics/img/1.jpg'),
            fooImg2:require('@/statics/img/2.jpg'),
            images:[
                require('@/statics/img/can1.jpg'),
                require('@/statics/img/can2.jpeg'),
                require('@/statics/img/can1.jpg'),
                require('@/statics/img/can2.jpeg'),
                '',
                require('@/statics/img/can2.jpeg'),
                require('@/statics/img/can1.jpg'),
                require('@/statics/img/can2.jpeg'),
                require('@/statics/img/can1.jpg'),
            ]
        }
    },
    components:{
        FooterItem:footerC
    },
    methods:{
        chooseResFn(val){
            if(val){
                this.show = true
            }
        },
        likeR(){
            if(this.iconName.indexOf('-o') != -1){
                this.iconName = 'good-job'
                this.iconColor='red'
            }else{
                this.iconName = 'good-job-o'
                this.iconColor='#2c3e50'
            }
        }
    }
}
</script>
<style scoped>
    #restaurant-list{
        background-color: #f5f5f5;
        padding:0.8rem 0 50px;
    }
    #restaurant-list >>> .vote-main-img{
        width: 100%;
        height:4rem;
    }
    .res-list-wrap{
        padding-top:10px;
    }
    #restaurant-list >>> .van-dialog{
        top:50%;
    }
    #restaurant-list >>> .van-dialog__header{
        margin-bottom:0.2rem;
        padding-top:0.25rem;
    }
    #restaurant-list >>> .van-swipe__track{
        width: 100%;
        height:2.5rem;
    }
    #restaurant-list >>> .van-swipe-item img{
        width: 100%;
        height:100%;
    }
    #restaurant-list >>> .van-dialog__content{
        padding:0 0.25rem 0.32rem;
        max-height:10rem;
        overflow-y:auto ;
    }
    #restaurant-list >>> .van-grid-item__content{
        padding:0;
    }
    .van-image{
        width: 100%;
        height:100%;
    }
    .name{
        margin:0;
        margin-top:0.15rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .name span{
        display: inline-block;
        font-size: 0.32rem;
        color:black;
        text-align: left;
    }
    .content{
        font-size: 0.28rem;
        text-align: left;
        line-height: 0.4rem;
        padding:0.15rem 0;
        margin:0;
    }
    .food-name{
        font-size:0.3rem;
        color:black;
        text-align: center;
        margin:0.2rem 0 0;
    }
</style>
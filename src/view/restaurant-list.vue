<template>
    <div id="restaurant-list">
        <!-- <img v-lazy="img" class="vote-main-img"/>
        <van-grid :column-num="3" :gutter="10" class="res-list-wrap" square >
            <van-grid-item @click="chooseResFn(item)" v-for="(item,index) in images" :key="index">
                <van-image :src="item" />
            </van-grid-item>
        </van-grid> -->

        
        <div class="map-wrap">
            <div class="map-name-wrap">
                <van-icon name="location" />
                <p style="margin-left:0.18rem;">浦东机场美食地图</p>
            </div>
            <img v-lazy="img" class="vote-main-img"/>
            <img v-for="(imgItem,index) in images" :key="index" v-lazy="imgItem.src" class="mapImg" :class="'mapImg'+index" @click="chooseResFn(imgItem)"/>
        </div>
        <!-- 模态框 -->
        <van-dialog v-model="show" title="餐厅介绍" :show-cancel-button="false" :showConfirmButton="false" closeOnClickOverlay id="resModel">
            <van-swipe :autoplay="3000">
                <van-swipe-item v-if="activeFoodObject.picUrls">
                    <img v-lazy="activeFoodObject.picUrls[0]" />
                </van-swipe-item>
            </van-swipe>
            <p class="name">
                <span>{{activeFoodObject.name}}</span>
                <van-icon :name="iconName"  size="0.45rem" :color="iconColor" @click="hallAddFn(activeFoodObject.id)"/>
            </p>
             <img  v-if="activeFoodObject.picUrls" class="contentImg" v-lazy="activeFoodObject.picUrls[1]" />
            <p class="content">{{activeFoodObject.content}}</p>
            <van-divider content-position="left" :close="closeModel" :style="{borderColor:'#1989fa',color: '#1989fa'}" dashed >推荐面点</van-divider>
            <div class="food-img-wrap" v-if="activeFoodObject.foods">
                <van-image
                    width="3.5rem"
                    height="3.5rem"
                    lazy-load
                    :src="activeFoodObject.foods[0].img"
                />
                <p class="food-name">{{activeFoodObject.foods[0].name}}</p>
            </div>
            <van-divider content-position="left" dashed :style="{borderColor:'#1989fa',color: '#1989fa'}" >推荐菜肴</van-divider>
            <div class="food-img-wrap" v-if="activeFoodObject.foods">
                <van-image
                    width="3.5rem"
                    height="3.5rem"
                    lazy-load
                    :src="activeFoodObject.foods[1].img"
                />
                <p class="food-name">{{activeFoodObject.foods[1].name}}</p>
            </div>
        </van-dialog>
        <FooterItem :activeName="activeName"/>
        <div class="mask" v-show="loading">
            <van-loading color="#0094ff" >加载中...</van-loading>
        </div>
    </div>
</template>
<script>
import footerC from '@/components/footerC.vue'
import {hallList,hallAdd,getHallDetail} from '@/utils/api'
export default {
    data(){
        return {
            loading:false,
            show:false,
            iconName:'good-job-o',
            iconColor:'#2c3e50',
            activeName:'',
            img:require('@/statics/img/map/mgp.png'),
            activeFoodObject:{},
            activeImg:'',
            images:[
                {
                    src:require('@/statics/img/map/map1.png'),
                    name:'浦东机场第一餐厅',
                    id:6,
                },
                {
                    src:require('@/statics/img/map/map2.png'),
                    name:'卫星厅社区食堂',
                    id:5,
                },
                {
                    src:require('@/statics/img/map/map3.png'),
                    name:'上海梅龙镇空港二餐厅',
                    id:4,
                },
                {
                    src:require('@/statics/img/map/map4.png'),
                    name:'P1职工食堂',
                    id:7,
                },
                {
                    src:require('@/statics/img/map/map5.png'),
                    name:'第三职工食堂',
                    id:3,
                },
                {
                    src:require('@/statics/img/map/map6.png'),
                    name:'浦东航油职工食堂',
                    id:1,
                },
                {
                    src:require('@/statics/img/map/map7.png'),
                    name:'商业街沙龙源职工餐厅',
                    id:9,
                },
                {
                    src:require('@/statics/img/map/map8.png'),
                    name:'安检过夜楼餐厅',
                    id:8,
                },
                {
                    src:require('@/statics/img/map/map9.png'),
                    name:'消防急救保障部食堂',
                    id:2,
                },
                
            ],
            hallListArray:[],
        }
    },
    components:{
        FooterItem:footerC
    },
    mounted(){
        this.hallListFn();
    },
    methods:{
        getHallDetail(id){
            getHallDetail({
                id:id
            })
            .then(res => {
                this.loading = false
                if(res.error == null){
                    this.activeFoodObject = res
                    if(this.hallListArray.indexOf(res.id) != -1){
                        this.iconName = 'good-job'
                        this.iconColor='red'
                    }else{
                        this.iconName = 'good-job-o'
                        this.iconColor='#2c3e50'
                    }
                    this.show = true
                    this.$nextTick(() => {
                        let ele = document.getElementById('resModel').getElementsByClassName('van-dialog__content')[0];
                        ele.scrollTop = 0
                    })
                }else{
                    this.activeFoodObject = {}
                    this.show = false;
                    this.$toast(res.error.msg)
                }
            })
            .catch(() => {
                this.loading = false
                this.show = false;
                this.$toast('查询详情失败')
            })
        },
        hallListFn(){
            if(window.localStorage.getItem('loginToken')){
                hallList()
                .then(res => {
                    if(res.error == null){
                        this.hallListArray = res.likeList
                    }else{
                        this.hallListArray
                    }
                })
            }
        },
        hallAddFn(hallId){
            hallAdd({
                hallId:hallId
            })
            .then(res => {
                if(res.error == null){
                    this.likeR();
                    this.hallListFn();
                }else{
                    this.$toast(res.error.msg)
                }
            })
            .catch(() => {
                this.$toast('点赞失败')
            })
        },
        chooseResFn(val){
            this.loading = true;
            this.getHallDetail(val.id)
        },
        closeModel(){
            this.$nextTick(() => {
                let ele = document.getElementById('resModel').getElementsByClassName('van-dialog__content')[0];
                ele.scrollTop = 0
            })
            this.activeFoodObject = {}
            this.show = false
            
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
        padding:0 0 50px;
        height: 100%;
        box-sizing: border-box;
        position: relative;
    }
    #restaurant-list >>> .vote-main-img{
        width: 100%;
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
        /* height:2.5rem; */
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

    .map-wrap{
        width: 100%;
        position: absolute;
        left:0;
        top:50%;
        transform: translateY(-50%);
    }
    .map-name-wrap{
        width: 100%;
        padding: 0 0.2rem;
        font-size: 0.32rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        box-sizing: border-box;
    }
    .mapImg{
        position: absolute;
        z-index:1;
    }
    .mapImg0{
        width: 1.4rem;
        left:3.5rem;
        bottom:3.55rem;
    }
    .mapImg1{
        width: 1.4rem;
        left:1.3rem;
        bottom:0.6rem;
    }
    .mapImg2{
        width: 1.4rem;
        left:2rem;
        top:4.9rem;
    }
    .mapImg3{
        width: 1.4rem;
        right:2.6rem;
        bottom:0.65rem;
    }
    .mapImg4{
        width: 1.4rem;
        left:1.85rem;
        top:2.55rem;
    }
    .mapImg5{
        width: 1.4rem;
        left:0.1rem;
        top:1.23rem;
    }
    .mapImg6{
        width: 1.4rem;
        right:0.3rem;
        bottom:2.5rem;
    }
    .mapImg7{
        width: 1.4rem;
        right:0.9rem;
        top:4.25em;
    }
    .mapImg8{
        width: 1.4rem;
        left:0.3rem;
        bottom:4.7rem;
    }
    .contentImg{
        width: 100%;
    }
    .mask{
        width: 100%;
        height:100%;
        position: fixed;
        left:0;
        top:0;
        z-index:15;
        background: rgba(0,0,0,.5);
    }
    #restaurant-list >>> .van-loading{
        position: absolute;
        left:50%;
        top:50%;
        transform: translateX(-50%) translateY(-50%);
    }
</style>
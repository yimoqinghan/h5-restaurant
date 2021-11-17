<template>
    <div id="login">
        <div class="login-box">
            <p class="login-title">浦东机场</p>
            <van-form @submit="onSubmit">
                <van-field
                    v-model="mobile"
                    name="手机号"
                    label="手机号"
                    placeholder="手机号"
                />
                <van-field
                    v-model="vscode"
                    center
                    clearable
                    label="短信验证码"
                    placeholder="请输入短信验证码"
                    >
                    <template #button>
                        <van-button :disabled="!clickAgin" size="small" type="primary" @click="sendSms">{{smsText}}</van-button>
                    </template>
                </van-field>
                <div style="margin: 0.8rem;">
                    <van-button round block type="info" native-type="submit">登录</van-button>
                </div>
            </van-form>
        </div>
    </div>
</template>
<script>
import utils from '@/utils/index'
export default {
    data(){
        return {
            mobile:'',
            vscode:'',
            smsText:'发送短信',
            timer:null,
            secondsNum:60,
            clickAgin:true,
        }
    },
    methods:{
        onSubmit(){
            if(this.mobile && this.vscode){
                if(utils.isMobile(this.mobile)){
                    this.$toast.success('登录成功！')
                    setTimeout(() => {
                        this.$router.push({
                            path:'/restaurant/index'
                        })
                    },500)
                    
                }else{
                    this.$toast('请正确填写手机号') 
                }
            }else{
                this.$toast('手机号/验证码不能为空!')
            }
        },
        timeCountDown() {
            this.clickAgin = false
            if (this.timer) window.clearInterval(this.timer)
            this.timer = setInterval(() => {
                --this.secondsNum
                this.smsText = `已发送短信（${this.secondsNum}s）`
                if (this.secondsNum == 0){
                    window.clearInterval(this.timer)
                    this.clickAgin = true
                    this.timer = null
                    this.smsText = "发送短信"
                }
            }, 1000)
        },
        sendSms(){
            if(this.mobile){
                if(utils.isMobile(this.mobile)){
                    this.$toast('已发送短信')
                    this.timeCountDown()
                }else{
                    this.$toast('请正确填写手机号') 
                }
            }else{
                this.$toast('手机号不能为空')
            }
        }
        
    }
}
</script>
<style scoped>
    #login{
        width: 100%;
        height: 100%;
        /* background-color: rgb(30, 128, 255); */
    }
    .login-box{
        width: 7rem;
        height:5rem;
        border-radius: 0.15rem;
        background-color:#fff;
        box-shadow: 0.05rem 0.02rem 0.05rem #fff;
        position: absolute;
        left:50%;
        top:50%;
        transform: translateX(-50%) translateY(-50%);
    }
    .login-title{
        font-size: 0.32rem;
        font-weight:bold;
        text-align: center;
    }
    .van-button--primary{
        background-color: #e33d3d;
        border:0.02rem solid #e33d3d;
        border-radius:0.05rem;
    }
    .van-button--info{
        background-color: #e33d3d;
        border:0.02rem solid #e33d3d;
    }
</style>
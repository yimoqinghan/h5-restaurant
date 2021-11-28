<template>
    <div id="login">
        <div class="login-box">
            <p class="login-title">浦东机场</p>
            <van-form >
                <van-field
                    v-model="mobile"
                    name="手机号"
                    label="手机号"
                    placeholder="手机号"
                />
                <van-field
                    v-model="captchaValue"
                    center
                    clearable
                    label="图形验证码"
                    placeholder="请输入图形验证码"
                    >
                    <template #extra>
                        <img @click="getCaptchaFn" class="captchaImage" :src="captchaImage" />
                    </template>
                </van-field>
                <van-field
                    v-model="smsCode"
                    center
                    clearable
                    label="短信验证码"
                    placeholder="请输入短信验证码"
                    >
                    <template #button>
                        <van-button :disabled="!clickAgin" size="small" type="primary" @click="sendSmsBtn">{{smsText}}</van-button>
                    </template>
                </van-field>
                <div style="margin: 0.8rem;">
                    <van-button :disabled="!clickSubmit" round block type="info" native-type="submit" @click="onSubmit">登录</van-button>
                </div>
            </van-form>
        </div>
    </div>
</template>
<script>
import utils from '@/utils/index'
import {getCaptcha,sendSms,smsLogin} from '@/utils/api'
export default {
    data(){
        return {
            mobile:'',
            smsText:'发送短信',
            timer:null,
            secondsNum:60,
            clickAgin:true,
            captchaImage:null,
            captchaToken:null,
            captchaValue:null,
            smsCode:null,
            clickSubmit:true,
        }
    },
    created(){
        this.getCaptchaFn();
    },
    mounted(){

    },
    methods:{
        getCaptchaFn(){
            getCaptcha()
                .then((res) => {
                    if(res.error == null){
                        this.captchaImage = res.captchaImage;
                        this.captchaToken = res.captchaToken;
                        
                    }
                })
        },
        sendSmsFn(){
            this.timeCountDown()
            sendSms({
                mobile:this.mobile,
                captchaToken:this.captchaToken,
                captchaValue:this.captchaValue
            })
            .then((res) => {
                if(res.error == null){
                //    this.$toast('短信发送成功')
                }else{
                    this.$toast(res.error.msg)
                    window.clearInterval(this.timer)
                    this.clickAgin = true
                    this.timer = null
                    this.smsText = "重新发送短信"
                }
            })
        },
        smsLoginFn(){
            this.clickSubmit = false
            smsLogin({
                mobile:this.mobile,
                smsCode:this.smsCode
            })
            .then((res) => {
                if(res.error == null){
                    this.$toast('登录成功')
                    window.localStorage.setItem('loginToken',res.token);
                    setTimeout(() => {
                        this.$router.push({
                            path:'/restaurant/index'
                        })
                    },1000)
                }else{
                    this.$toast(res.error.msg)
                    this.clickSubmit = true
                }
            })
            .catch(err => {
                console.log(err)
                this.$toast('登录失败')
                this.clickSubmit = true
            })
        },
        onSubmit(){
            if(this.mobile && this.smsCode){
                if(utils.isMobile(this.mobile)){
                    this.smsLoginFn();
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
        sendSmsBtn(){
            if(this.mobile){
                if(utils.isMobile(this.mobile)){
                    if(!this.captchaValue){
                        this.$toast('请输入图形验证码')
                    }else{
                        this.sendSmsFn()
                    }
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
        height: 100vh;
        background-color: #1989fa;
    }
    .login-box{
        width: 7rem;
        height:6rem;
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
        background-color: #1989fa;
        border:0.02rem solid #1989fa;
        border-radius:0.05rem;
    }
    .van-button--info{
        background-color: #1989fa;
        border:0.02rem solid #1989fa;
    }
    .captchaImage{
        width: 1.3rem;
    }
</style>
import {get,post} from '@/utils/http.js'
export const getCaptcha = p => get('/captcha',p); //获取图形验证码
export const sendSms = p => post('/sms/send', p); //发送短信
export const smsLogin = p => post('/sms/login', p); //短信验证登录
export const hallList = p => get('/hall/like/list', p); //获取已点赞食堂列表
export const hallAdd = p => post('/hall/like/add', p); //点赞
export const foodVote = p => post('/food/vote/vote', p); //投票
export const foodList = p => get('/food/list', p); //菜肴列表
export const foodRank = p => get('/food/rank', p); //排行榜
export const getHallDetail = p => get('/hall/detail', p); //食堂详情


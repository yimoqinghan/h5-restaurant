import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  /* mode:'history',
  scrollBehavior(to,from,savePosition){
    if (savePosition) {
      return savePosition
    } else{
      return {x:0,y:0}
    }
  }, */
  routes: [
    {
        path: '/',
        name: 'index',
        component: () => import('@/view/home.vue'),
        meta: {
            title: '餐厅首页',
        }
    },
    {
      path: '/restaurant/index',
      name: 'homeIndex',
      component: () => import('@/view/home.vue'),
      meta: {
        title: '餐厅首页',
      }
    },
    {
      path: '/restaurant/list',
      name: 'list',
      component: () => import('@/view/restaurant-list.vue'),
      meta: {
        title: '餐厅列表',
      }
    },
    {
      path: '/restaurant/dishesList',
      name: 'dishesList',
      component: () => import('@/view/dishes-list.vue'),
      meta: {
        title: '菜单列表',
      }
    },
    {
      path: '/restaurant/rankingList',
      name: 'rankingList',
      component: () => import('@/view/ranking-list.vue'),
      meta: {
        title: '排行榜',
      }
    },{
      path: '/restaurant/vote',
      name: 'vote',
      component: () => import('@/view/vote.vue'),
      meta: {
        title: '投票',
      }
    },
    {
      path: '/restaurant/rule',
      name: 'rule',
      component: () => import('@/view/rule.vue'),
      meta: {
        title: '活动说明',
      }
    },
    {
      path: '/restaurant/login',
      name: 'login',
      component: () => import('@/view/login.vue'),
      meta: {
        title: '登录',
      }
    }
  ]
})

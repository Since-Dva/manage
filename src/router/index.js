import Vue from 'vue'
import VueRouter from 'vue-router'
// import head from '../components/head'
// import aside from '../components/aside'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: '首页',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/login',
    name: '登录',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/inquiry/workbench',
    name: '询价工作台',
    component: () => import('../views/inquiry/Workbench.vue')
  },
  {
    path: '/inquiry/list',
    name: '定损询价单列表',
    component: () => import('../views/inquiry/List.vue')
  },
  {
    path: '/inquiry/programme',
    name: '报价方案管理',
    component: () => import('../views/inquiry/Programme.vue')
  },
  {
    path: '/insurance',
    name: '保险友商列表',
    component: () => import('../views/insurance/InsuranceList.vue')
  },
  {
    path: '/repair',
    name: '维修友商列表',
    component: () => import('../views/repair/RepairList.vue')
  },
  {
    path: '/autoParts',
    name: '汽配友商列表',
    component: () => import('../views/autoParts/AutoPartsList.vue')
  },
  {
    path: '/contentM/advert',
    name: '广告管理',
    component: () => import('../views/contentM/Advert.vue')
  },
  {
    path: '/contentM/systemNotice',
    name: '系统公告管理',
    component: () => import('../views/contentM/SystemNotice.vue')
  },
  {
    path: '/jurisdiction/insuranceAccount',
    name: '保险账户管理',
    component: () => import('../views/jurisdiction/InsuranceAccount.vue')
  },
  {
    path: '/jurisdiction/autoPartsAccount',
    name: '汽配账户管理',
    component: () => import('../views/jurisdiction/AutoPartsAccount.vue')
  },
  {
    path: '/jurisdiction/organization',
    name: '组织架构',
    component: () => import('../views/jurisdiction/platform/Organization.vue')
  },
  {
    path: '/jurisdiction/accountList',
    name: '账号列表',
    component: () => import('../views/jurisdiction/platform/AccountList.vue')
  },
  {
    path: '/jurisdiction/rolepermission',
    name: '角色权限',
    component: () => import('../views/jurisdiction/platform/Rolepermission.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

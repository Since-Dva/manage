import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/inquiry/workbench',
    name: 'Workbench',
    component: () => import('../views/inquiry/Workbench.vue')
  },
  {
    path: '/inquiry/list',
    name: 'List',
    component: () => import('../views/inquiry/List.vue')
  },
  {
    path: '/inquiry/programme',
    name: 'Programme',
    component: () => import('../views/inquiry/Programme.vue')
  },
  {
    path: '/insurance',
    name: 'InsuranceList',
    component: () => import('../views/insurance/InsuranceList.vue')
  },
  {
    path: '/repair',
    name: 'Repair',
    component: () => import('../views/repair/RepairList.vue')
  },
  {
    path: '/autoParts',
    name: 'AutoParts',
    component: () => import('../views/autoParts/AutoPartsList.vue')
  },
  {
    path: '/contentM/advert',
    name: 'Advert',
    component: () => import('../views/contentM/Advert.vue')
  },
  {
    path: '/contentM/systemNotice',
    name: 'SystemNotice',
    component: () => import('../views/contentM/SystemNotice.vue')
  },
  {
    path: '/jurisdiction/insuranceAccount',
    name: 'InsuranceAccount',
    component: () => import('../views/jurisdiction/InsuranceAccount.vue')
  },
  {
    path: '/jurisdiction/autoPartsAccount',
    name: 'AutoPartsAccount',
    component: () => import('../views/jurisdiction/AutoPartsAccount.vue')
  },
  {
    path: '/jurisdiction/organization',
    name: 'Organization',
    component: () => import('../views/jurisdiction/platform/Organization.vue')
  },
  {
    path: '/jurisdiction/accountList',
    name: 'AccountList',
    component: () => import('../views/jurisdiction/platform/AccountList.vue')
  },
  {
    path: '/jurisdiction/rolepermission',
    name: 'Rolepermission',
    component: () => import('../views/jurisdiction/platform/Rolepermission.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

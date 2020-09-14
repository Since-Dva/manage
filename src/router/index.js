import Vue from 'vue'
import VueRouter from 'vue-router'
import Head from '../components/head'
import Aside from '../components/aside'
import Home from '../views/Home'
import Login from '../views/Login'
import AccountInfo from '../views/Account/AccountInfo'
import ArticleDetail from '../views/Account/ArticleDetail'
import ModifyPwd from '../views/Account/ModifyPwd'
import AutoPartsDetail from '../views/autoParts/AutoPartsDetail'
import AutoPartsList from '../views/autoParts/AutoPartsList'
import Advert from '../views/contentM/Advert'
import SystemNotice from '../views/contentM/SystemNotice'
import List from '../views/inquiry/List'
import Programme from '../views/inquiry/programme/Programme'
import Program from '../views/inquiry/programme/Program'
import PrograDetail from '../views/inquiry/programme/PrograDetail'
import PrograDetailAuto from '../views/inquiry/programme/PrograDetailAuto'
import Workbench from '../views/inquiry/workbench/Workbench'
import InsuranceDetail from '../views/insurance/InsuranceDetail'
import InsuranceList from '../views/insurance/InsuranceList'
import AccountList from '../views/jurisdiction/platform/AccountList'
import Organization from '../views/jurisdiction/platform/Organization'
import Rolepermission from '../views/jurisdiction/platform/Rolepermission'
import AutoPartsAccount from '../views/jurisdiction/AutoPartsAccount'
import InsuranceAccount from '../views/jurisdiction/InsuranceAccount'
import RepairDetail from '../views/repair/RepairDetail'
import RepairList from '../views/repair/RepairList'
import Manage from '../views/supply/Manage'
import SupplyList from '../views/supply/SupplyList'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: '首页',
    components: {
      Head,
      Aside,
      default: Home
    }
  },
  {
    path: '/login',
    name: '登录',
    components: {
      default: Login
    }
  },
  {
    path: '/accountInfo',
    name: '账户信息',
    components: {
      Head,
      Aside,
      default: AccountInfo
    }
  },
  {
    path: '/modifyPwd',
    name: '修改密码',
    components: {
      Head,
      Aside,
      default: ModifyPwd
    }
  },
  {
    path: '/articleDetail',
    name: '公告详情',
    components: {
      Head,
      Aside,
      default: ArticleDetail
    }
  },
  {
    path: '/inquiry/workbench',
    name: '询价工作台',
    components: {
      Head,
      Aside,
      default: Workbench
    }
  },
  {
    path: '/inquiry/list',
    name: '定损询价单列表',
    components: {
      Head,
      Aside,
      default: List
    }
  },
  {
    path: '/inquiry/programme',
    name: '报价方案管理',
    components: {
      Head,
      Aside,
      default: Programme
    }
  },
  {
    path: '/inquiry/program',
    name: '报价方案详情',
    components: {
      Head,
      Aside,
      default: Program
    }
  },
  {
    path: '/inquiry/prograDetail',
    name: '方案详情',
    components: {
      Head,
      Aside,
      default: PrograDetail
    }
  },
  {
    path: '/inquiry/prograDetailAuto',
    name: '方案详情',
    components: {
      Head,
      Aside,
      default: PrograDetailAuto
    }
  },
  {
    path: '/insurance/insuranceList',
    name: '保险友商列表',
    components: {
      Head,
      Aside,
      default: InsuranceList
    }
  },
  {
    path: '/insurance/insuranceDetail',
    name: '保险友商详情页',
    components: {
      Head,
      Aside,
      default: InsuranceDetail
    }
  },
  {
    path: '/repair/repairList',
    name: '维修友商列表',
    components: {
      Head,
      Aside,
      default: RepairList
    }
  },
  {
    path: '/repair/repairDetail',
    name: '维修友商详情页',
    components: {
      Head,
      Aside,
      default: RepairDetail
    }
  },
  {
    path: '/autoParts/autoPartsList',
    name: '汽配友商列表',
    components: {
      Head,
      Aside,
      default: AutoPartsList
    }
  },
  {
    path: '/autoParts/autoPartsDetail',
    name: '汽配友商详情页',
    components: {
      Head,
      Aside,
      default: AutoPartsDetail
    }
  },
  {
    path: '/contentM/advert',
    name: '广告管理',
    components: {
      Head,
      Aside,
      default: Advert
    }
  },
  {
    path: '/contentM/systemNotice',
    name: '系统公告管理',
    components: {
      Head,
      Aside,
      default: SystemNotice
    }
  },
  {
    path: '/jurisdiction/insuranceAccount',
    name: '保险账户管理',
    components: {
      Head,
      Aside,
      default: InsuranceAccount
    }
  },
  {
    path: '/jurisdiction/autoPartsAccount',
    name: '汽配账户管理',
    components: {
      Head,
      Aside,
      default: AutoPartsAccount
    }
  },
  {
    path: '/jurisdiction/organization',
    name: '组织架构',
    components: {
      Head,
      Aside,
      default: Organization
    }
  },
  {
    path: '/jurisdiction/accountList',
    name: '账号列表',
    components: {
      Head,
      Aside,
      default: AccountList
    }
  },
  {
    path: '/jurisdiction/rolepermission',
    name: '角色权限',
    components: {
      Head,
      Aside,
      default: Rolepermission
    }
  },
  {
    path: '/supply/supplyList',
    name: '零部件列表',
    components: {
      Head,
      Aside,
      default: SupplyList
    }
  },
  {
    path: '/supply/manage',
    name: '零部件分类管理',
    components: {
      Head,
      Aside,
      default: Manage
    }
  },
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
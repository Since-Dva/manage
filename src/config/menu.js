export default [
    {icon:'home',iconatc:'homeatc',title:'首页',path:'/'},
    {icon:'ds',title:'定损询价管理',
        children:[
            {title:'询价工作台',path:'/inquiry/workbench'},
            {title:'定损询价单列表',path:'/inquiry/list'},
            {title:'报价方案管理',path:'/inquiry/programme'}
        ]
    },
    {icon:'bx',title:'保险友商管理',
        children:[
            {title:'保险友商列表',path:'/insurance/insuranceList'}
        ]
    },
    {icon:'wx',title:'维修友商管理',
        children:[
            {title:'维修友商列表',path:'/repair/repairList'}
        ]
    },
    {icon:'qp',title:'汽配友商管理',
        children:[
            {title:'汽配友商列表',path:'/autoParts/autoPartsList'}
        ]
    },
    {icon:'nr',title:'内容管理',
        children:[
            {title:'系统公告管理',path:'/contentM/systemNotice'},
            {title:'广告位管理',path:'/contentM/advert'}
        ]
    },
    {icon:'gyl',title:'供应链管理',
        children:[
            {title:'零部件列表',path:'/supply/supplyList'},
            {title:'零部件分类管理',path:'/supply/manage'}
        ]
    },
    {icon:'qx',title:'权限管理',
        children:[
            {title:'保险账户管理',path:'/jurisdiction/insuranceAccount'},
            {title:'汽配账户管理',path:'/jurisdiction/autoPartsAccount'},
            {title:'平台账户管理',children:[
                {title:'组织架构',path:'/jurisdiction/organization'},
                {title:'账号列表',path:'/jurisdiction/accountList'},
                {title:'角色权限',path:'/jurisdiction/rolepermission'}
            ]}
        ]
    },
]
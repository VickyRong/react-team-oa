
import Home from '../pages/home/home'

import MemberList from '../pages/member/list'
import AddMember from '../pages/member/add'
import EditMember from '../pages/member/edit'

import QueryOverTime from '../pages/overTime/query'
import AddOverTime from '../pages/overTime/add'

import QueryRestTime from '../pages/restTime/query'
import AddRestTime from '../pages/restTime/add'

import BookList from '../pages/book/list'
import AddBook from '../pages/book/add'

const routeConfig = [
    { path: '/',
      name:'首页',
      component: Home,
      indexRoute: { component: MemberList }, //默认路由
      childRoutes:[
        {
          name:'组员管理',
          path:'member',
          childRoutes:[
            { path: 'add', component: AddMember, name:'新增组员' },
            { path: 'list', component: MemberList , name:'组员列表' },
            { path: 'edit/:phone', component: EditMember, name:'编辑组员' },
          ]
        },
        {
          name:'加班管理',
          path:'overTime',
          childRoutes:[
            { path:'query',component:QueryOverTime,name:'查询加班' },
            { path:'add',component:AddOverTime,name:'新增加班'},
          ]
        },
        {
          name:'请假管理',
          path:'restTime',
          childRoutes:[
            { path:'query',component:QueryRestTime,name:'查询请假' },
            { path:'add',component:AddRestTime,name:'新增请假'},
          ]
        },
        {
          name:'书籍管理',
          path:'book',
          childRoutes:[
            { path:'add',component:AddBook,name:'新增书籍' },
            { path:'list',component:BookList,name:'书籍列表' },
          ]
        },
      ],
    }
  ]
  
export default routeConfig; 
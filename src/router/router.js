
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
      component: Home,
      indexRoute: { component: MemberList }, //默认路由
      childRoutes:[
        {
          path:'member',
          childRoutes:[
            { path: 'add', component: AddMember, breadcrumbName:'AddMember' },
            { path: 'list', component: MemberList , breadcrumbName:'MemberList' },
            { path: 'edit/:phone', component: EditMember, breadcrumbName:'EditMember' },
          ]
        },
        {
          path:'overTime',
          childRoutes:[
            { path:'query',component:QueryOverTime },
            { path:'add',component:AddOverTime },
          ]
        },
        {
          path:'restTime',
          childRoutes:[
            { path:'query',component:QueryRestTime },
            { path:'add',component:AddRestTime },
          ]
        },
        {
          path:'book',
          childRoutes:[
            { path:'add',component:AddBook },
            { path:'list',component:BookList },
          ]
        },
      ],
    }
  ]
  
export default routeConfig; 
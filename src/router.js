
import Home from './pages/home/home'

import MemberList from './pages/member/list'
import AddMember from './pages/member/add'
import EditMember from './pages/member/edit'

import OverTimeList from './pages/overTime/query'
import AddOverTime from './pages/overTime/add'

import RestTimeList from './pages/overTime/query'
import AddRestTime from './pages/overTime/add'

import BookList from './pages/book/list'
import AddBook from './pages/book/add'

const routeConfig = [
    { path: '/',
      component: Home,
      childRoutes:[
        {
          path:'member',
          childRoutes:[
            { path: 'add', component: AddMember },
            { path: 'list', component: MemberList },
            { path: 'edit/:phone', component: EditMember },
          ]
        },
        {
          path:'overTime',
          childRoutes:[
            { path:'add',component:AddOverTime },
            { path:'list',component:OverTimeList },
          ]
        },
        {
          path:'restTime',
          childRoutes:[
            { path:'add',component:RestTimeList },
            { path:'list',component:AddRestTime },
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
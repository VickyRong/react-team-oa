
import Home from './pages/home/home'

import AddMember from './pages/member/add'
import MemberList from './pages/member/list'
import MemberEdit from './pages/member/edit'

import AddBook from './pages/book/add'
import BookList from './pages/book/list'

import AddOverTime from './pages/time/addOverTime'
import AddRest from './pages/time/addRest'

const routeConfig = [
    { path: '/',
      component: Home,
      childRoutes:[
        {
          path:'member',
          childRoutes:[
            { path: 'add/:phone', component: AddMember },
            { path: 'list', component: MemberList },
            { path: 'edit/:phone', component: MemberEdit },
          ]
        },
        {
          path:'book',
          childRoutes:[
            { path:'add',component:AddBook },
            { path:'list',component:BookList },
          ]
        },
        {
          path:'time',
          childRoutes:[
            { path:'addOverTime',component:AddOverTime },
            { path:'addRest',component:AddRest },
          ]
        }
      ],
    }
  ]
  
export default routeConfig; 
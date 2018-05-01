import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute, Redirect } from 'react-router'

import Home from './pages/home/home'
import AddMember from './pages/member/add'
import MemberList from './pages/member/list'
import MemberDetail from './pages/member/detail'

const routeConfig = [
    { path: '/',
      component: Home,
      indexRoute: { component: Home },
      childRoutes: [
        { path: 'addMember', component: AddMember },
        { path: 'memberList', component: MemberList },
        { path: 'memberDetail', component: MemberDetail },
      ]
    }
  ]
  
export default routeConfig; 
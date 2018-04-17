import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute, Redirect } from 'react-router'

import Home from './pages/home/home'
import AddMember from './pages/member/add'
import MemberList from './pages/member/list'
import MemberDetail from './pages/member/detail'

export default  class Root extends React.Component {
  render(){
    return (
      <Router>
        <Route path="/" component={Home}>
          {/* <IndexRoute component={Home} /> */}
          <Route path="addMember" component={AddMember} />
          <Route path="memberList" component={MemberList} />
          <Route path="memberDetail" component={MemberDetail} />
        </Route>
      </Router>
      )
  }
}
ReactDOM.render(<Root />, document.body)

// const routeConfig = [
//     { path: '/',
//       component: Home,
//       indexRoute: { component: Home },
//       childRoutes: [
//         { path: 'addMember', component: AddMember },
//         { path: 'memberList', component: MemberList },
//         { path: 'memberDetail', component: MemberDetail },
//       ]
//     }
//   ]
  
  // React.render(<Router routes={routeConfig} />, document.body)
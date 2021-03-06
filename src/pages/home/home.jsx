import React from 'react';
import { Layout, Menu, Breadcrumb, Icon} from 'antd';
import { Link,browserHistory } from 'react-router';
// import routes from '../../router/router';
import '../../style/css/home.css'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


class Home extends React.Component {

  componentDidMount() {
    // this.itemRender(this.props.router.routes)
    browserHistory.listen((ev) => {
      // this.itemRender(this.context.router.routes);
    })
  }

  itemRender = (route, params, routes, paths) => {debugger
    const last = routes.indexOf(route) === routes.length - 1;
    return last ? <span>{route.name}</span> : <Link to={paths.join('/')}>{route.name}</Link>;
  }

  render() {
    return (
      <Layout>
      <Header className="header">
        <div className="logo" />
      </Header>
      <Layout className="layout-wrap">
        <Sider className="layout-l" width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <SubMenu key="sub1" title={<span><Icon type="team"/>组员管理</span>}>
              <Menu.Item key="1">
                <Link to="/member/list"> 组员列表 </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/member/add"> 添加组员 </Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="calendar" />加班管理</span>}>
              <Menu.Item key="3">
                 <Link to="/overTime/query"> 查询加班 </Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/overTime/add"> 新增加班 </Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title={<span><Icon type="coffee" />请假管理</span>}>
              <Menu.Item key="5">
                 <Link to="/restTime/query"> 查询请假 </Link>
              </Menu.Item>
              <Menu.Item key="6">
                <Link to="/restTime/add"> 新增请假 </Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub5" title={<span><Icon type="book" />图书管理</span>}>
              <Menu.Item key="7">
                <Link to="/book/list"> 书籍列表 </Link>
              </Menu.Item>
              <Menu.Item key="8">
                <Link to="/book/add"> 新增书籍 </Link>
              </Menu.Item>
            </SubMenu>
            {/* <SubMenu key="sub4" title={<span><Icon type="pay-circle-o" />报销管理</span>}>
              <Menu.Item key="5">
                 <Link to="/restTime/query"> 查询报销 </Link>
              </Menu.Item>
              <Menu.Item key="6">
                <Link to="/restTime/add"> 新增报销 </Link>
              </Menu.Item>
            </SubMenu> */}
          </Menu>
        </Sider>
        <Layout className="layout-r" style={{ padding: '0 24px 24px' }}>

          <Breadcrumb style={{ margin: '12px 0' }} itemRender={this.itemRender} />

          <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
              {this.props.children}
          </Content>

        </Layout>
      </Layout>
    </Layout>
    )
  }
}

export default Home;
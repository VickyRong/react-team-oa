import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import './home.css'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class Home extends Component {
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
            <SubMenu key="sub1" title={<span><Icon type="user" />组员管理</span>}>
              <Menu.Item key="1">组员列表</Menu.Item>
              <Menu.Item key="2">添加组员</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="notification" />加班／请假</span>}>
              <Menu.Item key="3">新增加班</Menu.Item>
              <Menu.Item key="4">新增请假</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title={<span><Icon type="book" />图书管理</span>}>
              <Menu.Item key="5">书籍列表</Menu.Item>
              <Menu.Item key="6">新增书籍</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="layout-r" style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '12px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
    )
  }
}

export default Home;
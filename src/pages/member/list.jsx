import React, { Component } from 'react';
import { Table, Divider,Input } from 'antd';
import { Link } from 'react-router';

const columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="javascript:;">{text}</a>,
  }, {
    title: '请假（天）',
    dataIndex: 'restTime',
    key: 'restTime',
  }, {
    title: '加班（天）',
    dataIndex: 'overTime',
    key: 'overTime',
  }, {
    title: '操作',
    key: 'action',
    render: (text, record) => (
      <span>
        <Link to="/member/detail"> 详情 </Link>
        <Divider type="vertical" />
        <Link to="/member/edit"> 编辑 </Link>
        <Divider type="vertical" />
        <a href="javascript:;">删除</a>
        <Divider type="vertical" />
      </span>
    ),
  }];
  
const data = [
    {
        key: '1',
        name: '小海绵',
        restTime: 2,
        overTime: 3,
    }, {
        key: '2',
        name: '小糯米',
        restTime: 4,
        overTime: 5,
    }, {
        key: '3',
        name: '小粽子',
        restTime: 0,
        overTime: 1,
    },
];

const Search = Input.Search;

class MemberList extends React.Component {
    handleSearch = (value) =>{
        console.log(value)
    }

    render(){
        return (
            <div>
                <Search onSearch={ this.handleSearch } style={{ width: 350, marginBottom:30}}
                    placeholder="请输入组员名字" enterButton="搜索" size="large" />
                <Table columns={columns} dataSource={data} />
            </div>
        )
    }
}
export default MemberList;


  
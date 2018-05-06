import React, { Component } from 'react';
import { Table, Divider } from 'antd';

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
        <a href="javascript:;">详情</a>
        <Divider type="vertical" />
        <a href="javascript:;">编辑</a>
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

class MemberList extends Component {
    render(){
        return (
            <Table columns={columns} dataSource={data} />
        )
    }
}
export default MemberList;


  
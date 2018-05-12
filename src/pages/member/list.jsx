import React from 'react';
import { Table, Input,Divider, InputNumber, Popconfirm, Form,message } from 'antd'; //Divider 为分割线
import { Link } from 'react-router';
import { browserHistory } from 'react-router'
import axios from 'axios';

const Search = Input.Search;

class MemberList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList : []
        };
        this.columns = [{
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
            render: text => <a href="javascript:;">{text}</a>,
          }, {
            title: '手机号',
            dataIndex: 'phone',
            key: 'phone',
          }, {
            title: '工位号',
            dataIndex: 'station',
            key: 'station',
          }, {
            title: '操作',
            key: 'action',
            render: (text, record) => (
              <span>
                <Link to = {`/member/edit/${record.phone}`}> 编辑 </Link>
                <Divider type="vertical" />
                <Popconfirm title="确认删除?" onConfirm={() => this.deleteMember(record.phone)}  okText="是" cancelText="否">
                    <a href="#">删除</a>
                </Popconfirm>
              </span>
            ),
          }];
    }
    
    componentDidMount() {
        this.getMemberList()
    }

    getMemberList = (value) =>{
        let actionUrl = 'http://45.249.247.190:3456';
        let data = {
            'action':'getMember',
        }
        axios.post(actionUrl,data).then(res => {
            this.setState({
                dataList : res.data.memberList
            })
        });
    }

    handleSearch = (value) =>{
        console.log(value)
        this.getMemberList(value);
    }

    toMemberEdit = (value) => {
        console.log(value)
        browserHistory.push('/member/edit')
    }

    deleteMember = (phone) =>{
        let actionUrl = 'http://45.249.247.190:3456';
        let data = {
            'action' : 'deleteMember',
            'phone' : phone
        }
        axios.post(actionUrl,data).then(res => {
            console.log(res)
            if(res.data.code != 0){
                message.err(res.data.msg);    
            }else{
                message.success('删除成功！');   
                const newDataList = [...this.state.dataList];
                this.setState({ dataList : newDataList.filter(item => item.phone !== phone)}); 
            }
        });

    }

    render(){
        return (
            <div>
                <Search onSearch={ this.handleSearch } style={{ width: 350, marginBottom:30}}
                    placeholder="请输入组员名字" enterButton="搜索" size="large" />
                <Table columns={this.columns} dataSource={this.state.dataList} rowKey={row => row.phone} pagination={{ pageSize: 8 }}  bordered/>
            </div>
        )
    }
}
export default MemberList;


  
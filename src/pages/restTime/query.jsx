import React from 'react';
import { Table, Input,Divider,Popconfirm,message } from 'antd'; //Divider 为分割线
import { Link } from 'react-router';
import { browserHistory } from 'react-router'
import axios from 'axios';

const Search = Input.Search;

class OverTimeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList : []
        };
        this.columns = [{
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
            render: text => <a href={null} >{text}</a>,
          }, {
            title: '加班总天数',
            dataIndex: 'total',
            key: 'total',
          }, {
            title: '操作',
            key: 'action',
            render: (text, record) => (
              <span>
                <Link to = {`/member/edit/${record.phone}`}> 展开 </Link>
                <Divider type="vertical" />
                <Popconfirm title="确认删除?" onConfirm={() => this.deleteMember(record.phone)}  okText="是" cancelText="否">
                    <a href={null}>删除</a>
                </Popconfirm>
              </span>
            ),
          }];
    }
    
    componentDidMount() {
        this.getOverTimeList()
    }

    getOverTimeList = (value) =>{
        let actionUrl = 'http://45.249.247.190:3456';
        let data = {
            'action':'getOvertime',
            'phone':value || ''
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
        browserHistory.push('/member/edit')
    }

    deleteMember = (phone) =>{
        let actionUrl = 'http://45.249.247.190:3456';
        let data = {
            'action' : 'deleteMember',
            'phone' : phone
        }
        axios.post(actionUrl,data).then(res => {
            if(res.data.code !== 0){
                message.err(res.data.msg);    
            }else{
                message.success('删除成功！');   
                const newDataList = [...this.state.dataList]; //给新数组赋值
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
export default OverTimeList;


  
import React from 'react';
import { Table, Input, Collapse  } from 'antd'; //Divider 为分割线
import moment from 'Moment';
import { GetRestTime } from "../../actions";

const Search = Input.Search;
const Panel = Collapse.Panel;

class LeaveList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList : [],
        };
        this.columns = [
          {
            title: '请假日期',
            dataIndex: 'start_time',
            key: 'start_time',
            render: start_time => moment.unix(start_time).format('YYYY-MM-DD'),
          },
          {
            title: '请假天数',
            dataIndex: 'quantity',
            key: 'quantity',
          },
          {
            title: '请假类型',
            dataIndex: 'leave_type',
            key: 'leave_type',
          },
          {
            title: '请假原因',
            dataIndex: 'note',
            key: 'note',
          },  
          
        //   {
        //     title: '操作',
        //     key: 'action',
        //     render: (text, record) => (
        //       <span>
        //         <Link to = {`/member/edit/${record.phone}`}> 详情 </Link>
        //         <Divider type="vertical" />
        //         <Popconfirm title="确认删除?" onConfirm={() => this.deleteMember(record.phone)}  okText="是" cancelText="否">
        //             <a href={null}>删除</a>
        //         </Popconfirm>
        //       </span>
        //     ),
        //   }
        ];
    }
    componentDidMount() {
    }

    callback = (key)=> {
        console.log(key);
    }

    getLeaveList = async (value) =>{
        let res = await GetRestTime({'name':value || ''});
        console.log(res);
        this.setState({
            dataList : res.leaveData,
        })
    }

    handleSearch = (value) =>{
        this.getLeaveList(value)
    }

    render(){
        const panelItems = this.state.dataList.map((item) =>
            <Panel header={`【${item.name}】 请假总共：${item.total} 天` }  key={item.phone} value={item}>
                 <Table columns={this.columns} dataSource={ item.leaveList } rowKey={row => row.start_time} pagination={{ pageSize: 8 }} size="small" />
            </Panel>
        );
        
        return (
            <div>
                <Search onSearch={ this.handleSearch } style={{ width: 350, marginBottom:30}}
                    placeholder="请输入组员名字" enterButton="搜索" size="large" />
                <Collapse defaultActiveKey={['1']} onChange={this.callback}>
                     { panelItems }
                </Collapse>
            </div>
        )
    }
}
export default LeaveList;


  
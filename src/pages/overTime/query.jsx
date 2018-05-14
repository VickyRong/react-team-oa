import React from 'react';
import { Table, Input,Collapse } from 'antd'; //Divider 为分割线
import moment from 'Moment';
import { GetOverTime } from "../../actions";


const Search = Input.Search;
const Panel = Collapse.Panel;

class OverTimeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList : [],
        };
        this.columns = [
          {
            title: '加班日期',
            dataIndex: 'start_time',
            key: 'start_time',
            render: start_time => moment.unix(start_time).format('YYYY-MM-DD'),
          },
          {
            title: '加班天数',
            dataIndex: 'quantity',
            key: 'quantity',
          },
          {
            title: '加班原因',
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

    getOverTimeList = async (value) =>{
        let res = await GetOverTime({'name':value || ''});
        this.setState({
            dataList : res.overtimeData,
        })
    }

    handleSearch = (value) =>{
        this.getOverTimeList(value)
    }

    render(){
        const panelItems = this.state.dataList.map((item) =>
            <Panel header={`【${item.name}】 加班总共：${item.total} 天` }  key={item.phone} value={item}>
                 <Table columns={this.columns} dataSource={ item.overtimeList } rowKey={row => row.start_time} pagination={{ pageSize: 8 }} size="small" />
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
export default OverTimeList;


  
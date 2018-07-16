import React from "react";
import { Table, Input, Divider, Popconfirm, message } from "antd"; //Divider 为分割线
import { Link } from "react-router";
import { browserHistory } from "react-router";
import { GetMemberList, DeleteMember } from "../../actions";

const Search = Input.Search;

class MemberList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: []
    };
    this.columns = [
      {
        title: "姓名",
        dataIndex: "name",
        key: "name",
        render: text => <a href={null}>{text}</a>
      },
      {
        title: "手机号",
        dataIndex: "phone",
        key: "phone"
      },
      {
        title: "工位号",
        dataIndex: "station",
        key: "station"
      },
      {
        title: "操作",
        key: "action",
        render: (text, record) => (
          <span>
            <Link to={`/member/edit/${record.phone}`}> 编辑 </Link>
            <Divider type="vertical" />
            <Popconfirm
              title="确认删除?"
              onConfirm={() => this.deleteMember(record.phone)}
              okText="是"
              cancelText="否"
            >
              <a href={null}>删除</a>
            </Popconfirm>
          </span>
        )
      }
    ];
  }

  componentDidMount() {
    this.getMemberList();
  }

  getMemberList = async value => {
    let res = await GetMemberList(value);
    this.setState({
      dataList: res.memberList
    });
  };

  handleSearch = value => {
    this.getMemberList({name:value});
  };

  toMemberEdit = value => {
    browserHistory.push("/member/edit");
  };

  deleteMember = async phone => {
    let res = await DeleteMember({phone});
    if (res.code !== 0) {
      message.err(res.msg);
    } else {
      message.success("删除成功！");
      const newDataList = [...this.state.dataList]; //给新数组赋值,直接用等号复制，引用地址相同，会改变原来数组的值。
      this.setState({ //phone 被删除的号码
        dataList: newDataList.filter(item => item.phone !== phone) //filter ==> 筛选出符合条件的
      });
    }
  };

  render() {
    return (
      <div>
        <Search
          onSearch={this.handleSearch}
          style={{ width: 350, marginBottom: 30 }}
          placeholder="请输入组员名字"
          enterButton="搜索"
          size="large"
        />
        <Table
          columns={this.columns}
          dataSource={this.state.dataList}
          rowKey={row => row.phone}
          pagination={{ pageSize: 6 }}
          bordered
        />
      </div>
    );
  }
}
export default MemberList;

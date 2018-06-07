import React from "react";
import { GetBookList } from "../../actions";
import moment from 'Moment';
import { Table } from "antd";
import "../../style/css/form.css";

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: []
    };
    this.columns = [
      {
        title: "书名",
        dataIndex: "book_name",
        key: "book_name"
      },
      {
        title: "价格",
        dataIndex: "price",
        key: "price",
        render: price => `¥${price}`
      },
      {
        title: "购买时间",
        dataIndex: "buy_time",
        key: "buy_time",
        render: buy_time => moment.unix(buy_time).format('YYYY-MM-DD')
      },
      {
        title: "购买者",
        dataIndex: "buyer",
        key: "buyer"
      }
    ];
  }

  componentDidMount() {
    this.getBookList();
  }

  getBookList = async value => {
    let res = await GetBookList();
    this.setState({
        dataList: res.bookList
    });
    console.log(this.state.dataList);
  };

  render() {
      return (
          <div>
            <Table
                columns={this.columns}
                dataSource={this.state.dataList}
                rowKey={row => row.i}
                pagination={{ pageSize: 30 }}
                bordered
            />              
          </div>
      )
  }
}
export default BookList;

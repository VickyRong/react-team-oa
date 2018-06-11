import React from "react";
import { Form, Input, Button,Select,DatePicker,InputNumber,message } from 'antd';
import { GetMemberList, AddBook } from "../../actions";
import { browserHistory } from 'react-router'


const FormItem = Form.Item;
const Option = Select.Option;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 18 }
  }
};

class AddBookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: []
    };
  }

  //渲染前调用
  componentWillMount() {
    this.getMemberList();
  }

  getMemberList = async () => {
    let res = await GetMemberList();
    this.setState({
      dataList: res.memberList
    });
  };
  
  handleChange = (e) => {
  } 

  onChange(date, dateString) {
    
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.addBookList(values);
      }
    });
  }
  onPriceChange = () =>{}

  addBookList = async (value) =>{
    let res = await AddBook({
        buyer_phone:value.buyer,
        book_name:value.book_name,
        price:value.price,
        buy_time:value.buy_time
    })
    if(res.code !== 0){
      message.error(res.msg);
    }else{
      message.success('添加成功！');
      setTimeout(()=>{
        browserHistory.push('/book/list');
      },1000);
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const options = this.state.dataList.map( d => <Option key={d.phone} name={d.name}>{d.name}</Option>)
    return (
      <Form onSubmit={this.handleSubmit} className="ui-form">
        <FormItem
          {...formItemLayout}
          label="购买人"
        >
          {getFieldDecorator('buyer', {
            rules: [{required: true, message: '请选择购买者'}],
          })(
            <Select
                showSearch
                style={{ width: 225 }}
                placeholder="选择组员"
                optionFilterProp="children"
                onChange={this.handleChange}
                filterOption={(input, option) => option.props.name.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              >
              {options}
            </Select>
          )}
        </FormItem>
        <FormItem 
          {...formItemLayout}
          label="书名：">
          {getFieldDecorator('book_name', {
            rules: [{ required: true, message: '请填写书名!'}],
          })(
              <Input/>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="价格：">
          {getFieldDecorator('price', {
            rules: [{ required: true, message: '请选择价格!'}],
          })(
            <InputNumber min={0} max={1000} step={1} onChange={this.onPriceChange} style={{ width: 225 }}/>
          )}
        </FormItem>
        <FormItem 
          {...formItemLayout}
          label="购买时间：">
          {getFieldDecorator('buy_time', {
            rules: [{ required: true, message: '请选择购买时间!'},
            ],
          })(
            <DatePicker onChange={this.onChange} placeholder="选择日期" style={{ width: 225 }} />
          )}
        </FormItem>
       
        <FormItem>
            <Button type="primary" htmlType="submit" className="ui-form-button">
                提交
            </Button>
        </FormItem>
      </Form>
    );
  }
}
const WrappedAddBookForm = Form.create()(AddBookForm);

export default WrappedAddBookForm;


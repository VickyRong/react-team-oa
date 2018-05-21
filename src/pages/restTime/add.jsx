import React from 'react';
import { Form, Input, Button, message,Select,InputNumber,DatePicker } from 'antd';
import "../../style/css/form.css";
import { browserHistory } from 'react-router'
import { GetMemberList,AddRestTime } from "../../actions";


const FormItem = Form.Item;
const Option = Select.Option;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 18 },
  },
};

class AddRestTimeForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      options:[],
      dataList:[]
    }
  }

  //渲染前调用
  componentWillMount(){ 
    this.getMemberList();
  }

  onDayChange(value) { //天数选择
  } 

  onChange(date, dateString) {
    console.log(date, dateString);
    
  }
  handleChange(value) {
    console.log(`selected ${value}`);
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.addRestTime(values);
      }
    });
  }

  getMemberList = async () => {
    let res = await GetMemberList();
    this.setState({
      dataList: res.memberList
    });
  };

  addRestTime = async (value) =>{
    let res = await AddRestTime({
      "start_time":value.RestTime.unix(), //请假时间(Moment时间戳) - 必填
      "quantity":value.days, //请假天数 - 必填
      "leave_type":value.type, //请假类型
      "note":value.reason, //请假原因  
      "phone":value.userPhone //手机号 - 必填
  });
  if(res.code !== 0){
    message.error(res.msg);
  }else{
    message.success('添加成功！');
    setTimeout(()=>{
      browserHistory.push('/restTime/query');
    },1000);
  }
}
  render() {
    const { getFieldDecorator } = this.props.form;
    const options = this.state.dataList.map(d => <Option key={d.phone}  name={d.name} >{d.name}</Option>);
    return (
      <Form onSubmit={this.handleSubmit} className="ui-form">
        <FormItem
          {...formItemLayout}
          label="姓名："
        >
          {getFieldDecorator('userPhone', {
            rules: [{ required: true, message: '请填写姓名!' }],
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
          label="请假时间：">
          {getFieldDecorator('RestTime', {
            rules: [{ required: true, message: '请选择请假时间!'},
            ],
          })(
            <DatePicker onChange={this.onChange} placeholder="选择日期" style={{ width: 225 }} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="请假天数：">
          {getFieldDecorator('days', {
            rules: [{ required: true, message: '请选择请假天数!' }],
          })(
            <InputNumber min={0} max={10} step={0.5} onChange={this.onDayChange} style={{ width: 225 }}/>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="请假类型：">
          {getFieldDecorator('type', {
            rules: [{ required: true, message: '请选择请假类型!' }],
             initialValue: '0' 
          })(
            <Select  style={{ width: 225 }} onChange={this.handleChange}>
              <Option value="0">年假</Option>
              <Option value="1">调休</Option>
              <Option value="2">事假</Option>
              <Option value="3">病假</Option>
            </Select> 
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="请假原因：">
          {getFieldDecorator('reason', {
            rules: [{ required: false }],
          })(
            <Input />
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

const WrappedAddRestTimeForm = Form.create()(AddRestTimeForm);

export default WrappedAddRestTimeForm;


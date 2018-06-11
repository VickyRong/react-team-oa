import React from 'react';
import { Form, Input, Button, message,Select,InputNumber,DatePicker } from 'antd';
import "../../style/css/form.css";
import { browserHistory } from 'react-router'
import { GetMemberList, AddOverTime } from "../../actions";



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

class AddOverTimeForm extends React.Component {
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
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.addOverTime(values);
      }
    });
  }

  getMemberList = async () => {
    let res = await GetMemberList();
    this.setState({
      dataList: res.memberList
    });
  };

  addOverTime = async (value) =>{
    let res = await AddOverTime({
        "start_time":value.overTime.unix(), //加班时间(Moment时间戳) - 必填
        "quantity":value.days, //加班天数 - 必填
        "note":value.reason, //加班原因  
        "phone":value.userPhone //手机号 - 必填
    });
    if(res.code !== 0){
      message.error(res.msg);
    }else{
      message.success('添加成功！');
      setTimeout(()=>{
        browserHistory.push('/overTime/query');
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
          label="加班时间：">
          {getFieldDecorator('overTime', {
            rules: [{ required: true, message: '请选择加班时间!'},
            ],
          })(
            <DatePicker onChange={this.onChange} placeholder="选择日期" style={{ width: 225 }} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="加班天数：">
          {getFieldDecorator('days', {
            rules: [{ required: true, message: '请选择加班天数!' }],
          })(
            <InputNumber min={0} max={10} step={0.5} onChange={this.onDayChange} style={{ width: 225 }}/>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="加班原因：">
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

const WrappedAddOverTimeForm = Form.create()(AddOverTimeForm);

export default WrappedAddOverTimeForm;


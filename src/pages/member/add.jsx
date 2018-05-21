import React from 'react';
import { Form, Input, Button, message } from 'antd';
import "../../style/css/form.css";
import { browserHistory } from 'react-router'
import { AddMember } from "../../actions";


const FormItem = Form.Item;
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

class AddMemberForm extends React.Component {
  checkPhone = (rule, value, callback) =>{
    console.log(rule);
    console.log(value);
    // callback('手机号码不正确！');
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('获取到的表单数据: ', values);
        this.addMember(values);
      }
    });
  }

  addMember = async (value) =>{
    let res = await AddMember({
        "name":value.userName,
        "station":value.station,
        "phone":value.telephone
    })
    if(res.code !== 0){
        message.error(res.msg);
      }else{
        message.success('添加成功！');
        setTimeout(()=>{
          browserHistory.push('/member/list');
        },1000);
      }
}


  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="ui-form">
        <FormItem
          {...formItemLayout}
          label="姓名："
        >
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '请填写姓名!' }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem 
          {...formItemLayout}
          label="手机号：">
          {getFieldDecorator('telephone', {
            rules: [{ required: true, message: '请填写手机号!'},
             {
              // validator: this.checkPhone,
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="工位号：">
          {getFieldDecorator('station', {
            rules: [{ required: false, message: '请填写工位号!' }],
          })(
            <Input/>
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

const WrappedAddMemberForm = Form.create()(AddMemberForm);

export default WrappedAddMemberForm;


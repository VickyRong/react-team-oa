import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import '../css/form.css'

const FormItem = Form.Item;
class AddMemberForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('获取到的表单数据: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="ui-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '请填写姓名!' }],
          })(
            <Input prefix={<Icon type="user"/> } placeholder="姓名" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('number', {
            rules: [{ required: false, message: '请填写工位号!' }],
          })(
            <Input prefix={<Icon type="contacts" />} placeholder="工位号" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('telephone', {
            rules: [{ required: false, message: '请填写手机号!' }],
          })(
            <Input prefix={<Icon type="phone"/>} placeholder="手机号码" />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" className="ui-form-button">
            确认
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedAddMemberForm = Form.create()(AddMemberForm);

export default WrappedAddMemberForm;


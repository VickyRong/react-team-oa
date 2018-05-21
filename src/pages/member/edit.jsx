import React from "react";
import { Form, Input, Button, message } from "antd";
import { browserHistory } from "react-router";
import "../../style/css/form.css";
import { GetMemberList, EditMember } from "../../actions";

const FormItem = Form.Item;
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

class EditMemberForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataDetail: {}
    };
  }

  //渲染前调用
  componentWillMount() {
    this.getMemberList(this.props.params.phone);
  }

  getMemberList = async value => {
    let res = await GetMemberList({ phone: value || "" });
    if (res.code === 0) {
      if (res.memberList.length !== 0) {
        this.setState({
          dataDetail: res.memberList[0]
        });
      }
    } else {
      message.err(res.msg);
    }
  };

  checkPhone = (rule, value, callback) => {
    console.log(rule);
    console.log(value);
    // callback('手机号码不正确！');
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("获取到的表单数据: ", values);

        this.updateMember(values);
      }
    });
  };

  updateMember = async value => {
    let res = await EditMember({
        phone: this.props.params.phone,
        newName: value.userName,
        newStation: value.station,
        newPhone: value.telephone
      });
    if (res.code !== 0) {
      message.error(res.msg);
    } else {
      message.success("修改成功！");
      setTimeout(() => {
        browserHistory.push("/member/list");
      }, 1000);
    }  
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="ui-form">
        <FormItem {...formItemLayout} label="姓名：">
          {getFieldDecorator("userName", {
            initialValue: this.state.dataDetail.name || "",
            rules: [{ required: true, message: "请填写姓名!" }]
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="手机号：">
          {getFieldDecorator("telephone", {
            initialValue: this.state.dataDetail.phone || "",
            rules: [
              { required: true, message: "请填写手机号!" },
              {
                // validator: this.checkPhone,
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="工位号：">
          {getFieldDecorator("station", {
            initialValue: this.state.dataDetail.station || "",
            rules: [{ required: false, message: "请填写工位号!" }]
          })(<Input />)}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" className="ui-form-button">
            修改
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedEditMemberForm = Form.create()(EditMemberForm);

export default WrappedEditMemberForm;

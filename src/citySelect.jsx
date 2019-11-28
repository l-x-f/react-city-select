import React, { Component } from "react";
import { Form,  Button, message, Icon } from "antd";

import CitySelect from "./components/CitySelect";

import "./style.less";

const FormCreate = Form.create;
const FormItem = Form.Item;

@FormCreate()
class CitySelectApp extends Component {
  state = {
    selectedValues: []
  };

  handleReset = () => {
    this.props.form.resetFields();
  };

  // 获取选择值
  getSelectedValues = selectedValues => {
    this.setState({
      selectedValues
    });
  };

  handleSumit = e => {
    const { form } = this.props;

    e.preventDefault();
    form.validateFields((err, formData) => {
      console.log(formData, "formData");
      if (err) {
        message.destroy();
        return message.warning("请完整填写表单");
      }
      const data = {
        ...formData,
        selectedValues: this.state.selectedValues
      };
      console.log(data, "data");
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const defaultCity = ["陕西省", "西安市", "碑林区"];

    return (
      <Form
        className="custom-form custom-vertical-hotel-form"
        layout="vertical"
        labelAlign="left"
        onSubmit={e => {
          this.handleSumit(e);
        }}
        style={{ background: "#fff", padding: 24 }}
      >
        {/* 数据绑定 拿到的city字段是城市编码  getSelectedValues监听可以拿到选择的数据对象 */}
        <FormItem label="城市选择：">
          {getFieldDecorator("city", {
            initialValue: defaultCity,
            rules: [{ required: true, message: "请选择城市选择" }]
          })(<CitySelect getSelectedValues={this.getSelectedValues} />)}
        </FormItem>

        <FormItem label="城市选择：">
          <CitySelect
            getSelectedValues={this.getSelectedValues}
            value={defaultCity}
          />
        </FormItem>

        <FormItem style={{ paddingBottom: 0 }}>
          <Button type="primary" htmlType="submit">
            <Icon type="arrow-up" />
            保存
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default CitySelectApp;


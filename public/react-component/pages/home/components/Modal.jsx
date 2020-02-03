import React, { Fragment, useState, useEffect } from 'react'
import {
  Table,
  Divider,
  Tag,
  Button,
  Input,
  Modal,
  Form,
  Row,
  Col,
  Icon,
  DatePicker,
  Select,
  TimePicker,
  memo
} from 'antd';

function ContractModal(props) {
  const {
    form,
    visible,
    handleOk,
    btnLoading,
    handleCancel
  } = props
  console.log('props', props)
  const { getFieldDecorator } = form;
  const content = (
    <Form>
      <Row gutter={[24, 8]}>
        <Col span={12}>
          <Form.Item label="合同类型">
            {getFieldDecorator('type', {
              rules: [
                {
                  required: true,
                  message: '请选择合同类型',
                },
              ],
            })(<Select>
              <Option value="86">+86</Option>
              <Option value="87">+87</Option>
            </Select>)}
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="客户/供应商">
            {getFieldDecorator('client', {
              rules: [
                {
                  required: true,
                  message: '请填写客户',
                },
              ],
            })(<Input />)}
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="签约时间">
            {getFieldDecorator('signTime', {
              rules: [
                {
                  required: true,
                  message: '请填写时间',
                },
              ],
            })(<DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />)}
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="合同到期时间">
            {getFieldDecorator('DueTime', {
              rules: [
                {
                  required: true,
                  message: '请填写到期时间',
                },
              ],
            })(<DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />)}
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="产品名称">
            {getFieldDecorator('product', {
              rules: [
                {
                  required: true,
                  message: '请填写产品名称',
                },
              ],
            })(<Input />)}
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="金额">
            {getFieldDecorator('price', {
              rules: [
                {
                  required: true,
                  message: '请填写产品金额',
                },
              ],
            })(<Input />)}
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="部门">
            {getFieldDecorator('product', {
              rules: [
                {
                  required: true,
                  message: '请填写产品名称',
                },
              ],
            })(<Select>
              <Option value="86">+86</Option>
              <Option value="87">+87</Option>
            </Select>)}
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="签订人">
            {getFieldDecorator('signer', {
              rules: [
                {
                  required: true,
                  message: '请填写签订人',
                },
              ],
            })(<Input />)}
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
  return (
    <Modal
      title="Title"
      visible={visible}
      onOk={handleOk}
      confirmLoading={btnLoading}
      onCancel={handleCancel}
    >
      {content}
    </Modal>
  )
}

export default Form.create()(ContractModal);
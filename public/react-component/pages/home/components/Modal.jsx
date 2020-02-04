import React, { Fragment, useState, useEffect } from 'react'
import {
  addApi,
  editApi,
  refreshTableData
} from '../service/actions'
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
  memo,
  message
} from 'antd';
import moment from 'moment'
import { useDispatch } from 'react-redux'


function ContractModal(props) {
  const {
    form,
    visible,
    setVisible,
    mode,
    info
  } = props
  const [btnLoading, setBtnLoading] = useState(false)
  const { getFieldDecorator } = form;
  const dispatch = useDispatch()
  const content = (
    <Form>
      <Row gutter={[24, 8]}>
        <Col span={12}>
          <Form.Item label="合同类型">
            {getFieldDecorator('type', {
              initialValue: mode === 'edit' ? info.type : '',
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
              initialValue: mode === 'edit' ? info.client : '',
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
              initialValue: mode === 'edit' ? moment(info.signTime) : '',
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
              initialValue: mode === 'edit' ? moment(info.DueTime) : '',
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
              initialValue: mode === 'edit' ? info.product : '',
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
              initialValue: mode === 'edit' ? info.price : '',
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
            {getFieldDecorator('department', {
              initialValue: mode === 'edit' ? info.department : '',
              rules: [
                {
                  required: true,
                  message: '请选择部门',
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
              initialValue: mode === 'edit' ? info.signer : '',
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

  const handleCancel = () => {
    setVisible(false)
    form.resetFields()
  }

  const handleConfirm = () => {
    form.validateFields(async (errors, values) => {
      if (!errors) {
        setBtnLoading(true)
        let res;
        if (mode === 'add') {
          res = await addApi()
        } else {
          res = await editApi()
        }
        if (res) {
          setBtnLoading(false)
          message.success(`${mode === 'add' ? '添加成功' : '修改成功'}`)
          handleCancel()
          dispatch(refreshTableData())
        }
      } else {
        message.error('您有信息未输入')
      }
    })
  }
  return (
    <Modal
      title="Title"
      visible={visible}
      onOk={handleConfirm}
      confirmLoading={btnLoading}
      onCancel={handleCancel}
    >
      {content}
    </Modal>
  )
}

export default Form.create()(ContractModal);
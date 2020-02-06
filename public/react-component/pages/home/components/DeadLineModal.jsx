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
  message,
  InputNumber
} from 'antd';
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchContractType,
  setContractTypes,
  postEditLimit
} from '../service/actions'

const { Option } = Select;

function DeadLineModal(props) {

  useEffect(() => {
    (async () => {
      let typeRes = await fetchContractType()
      dispatch(setContractTypes(_.get(typeRes, ['data', 'data'])))
    })()

  }, [])
  const {
    form,
    visible,
    setVisible,
  } = props

  const {
    limit
  } = useSelector(state => state.home)
  const [btnLoading, setBtnLoading] = useState(false)
  const { getFieldDecorator } = form;
  const dispatch = useDispatch()

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
  const content = (
    <Form {...formItemLayout}>
      <Form.Item label="提醒期限">
        {getFieldDecorator('limit', {
          initialValue: limit,
          rules: [
            {
              required: true,
              message: '请输入期限',
            },
          ],
        })(<InputNumber size="small" min={1} max={200} />)}
      </Form.Item>
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
        let res = await postEditLimit(values)
        if (res) {
          setBtnLoading(false)
          message.success(`修改成功`)
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
      title="配置"
      visible={visible}
      onOk={handleConfirm}
      confirmLoading={btnLoading}
      onCancel={handleCancel}
    >
      {content}
    </Modal>
  )
}

export default Form.create()(DeadLineModal);
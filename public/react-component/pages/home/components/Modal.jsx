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
import { useDispatch, useSelector } from 'react-redux'
import locale from 'antd/lib/date-picker/locale/zh_CN';
import {
  fetchContractType,
  setContractTypes
} from '../service/actions'

const { Option } = Select;
const { TextArea } = Input;
moment.locale('zh-cn')

function ContractModal(props) {

  // useEffect(() => {
  //   (async () => {
  //     let typeRes = await fetchContractType()
  //     dispatch(setContractTypes(_.get(typeRes, ['data', 'data'])))
  //   })()

  // }, [])
  const {
    form,
    visible,
    setVisible,
    mode,
    info,
    role
  } = props


  const [btnLoading, setBtnLoading] = useState(false)
  const { getFieldDecorator } = form;
  const dispatch = useDispatch()
  const contractTypes = [{
    id: 1,
    name: '合同'
  }, {
    id: 2,
    name: '分包合同'
  }]


  const content = (
    <div>
      <Form>
        <Row gutter={[24, 8]}>
          <Col span={8}>
            <Form.Item label="合同类型">
              {getFieldDecorator('contract_type', {
                initialValue: mode === 'edit' ? info.contract_type : '',
                rules: [
                  {
                    required: true,
                    message: '请选择合同类型',
                  },
                ],
              })(<Select>
                {
                  contractTypes.map(type => <Option key={type.id}>{type.name}</Option>)
                }
              </Select>)}
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="客户/供应商">
              {getFieldDecorator('contract_client', {
                initialValue: mode === 'edit' ? info.contract_client : '',
                rules: [
                  {
                    required: true,
                    message: '请填写客户',
                  },
                ],
              })(<Input />)}
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="客户/供应商(曾用名)">
              {getFieldDecorator('oldClient', {
                initialValue: mode === 'edit' ? info.oldClient : '',
                rules: [
                  {
                    required: false,
                    message: '请填写客户',
                  },
                ],
              })(<Input />)}
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item label="签约时间">
              {getFieldDecorator('signTime', {
                initialValue: mode === 'edit' ? moment(info.signTime) : null,
                rules: [
                  {
                    required: true,
                    message: '请填写时间',
                  },
                ],
              })(<DatePicker locale={locale} showTime format="YYYY-MM-DD HH:mm:ss" />)}
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="合同到期时间">
              {getFieldDecorator('dueTime', {
                initialValue: mode === 'edit' ? moment(info.dueTime) : null,
                rules: [
                  {
                    required: true,
                    message: '请填写到期时间',
                  },
                ],
              })(<DatePicker locale={locale} showTime format="YYYY-MM-DD HH:mm:ss" />)}
            </Form.Item>
          </Col>
          <Col span={8}>
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
          <Col span={8}>
            <Form.Item label="金额">
              {getFieldDecorator('price', {
                initialValue: mode === 'edit' ? info.price : '',
                rules: [
                  {
                    required: false,
                    message: '请填写产品金额',
                  },
                ],
              })(<Input />)}
            </Form.Item>
          </Col>
          <Col span={8}>
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
          <Col span={8}>
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
          <Col span={8}>
            <Form.Item label="备注">
              {getFieldDecorator('resume', {
                initialValue: mode === 'edit' ? info.resume : '',
                rules: [
                  {
                    required: false,
                    message: '请填写签订人',
                  },
                ],
              })(<Input />)}
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
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
          res = await addApi(values)
        } else {
          res = await editApi(values, info.id)
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

  const footer = (
    [
      <Button key="back" onClick={handleCancel}>
        取消
      </Button>,
      <Button key="submit" className={role === 'admin' ? '' : 'hidden'} type="primary" loading={btnLoading} onClick={handleConfirm}>
        提交
      </Button>,
    ]
  )
  return (
    <Modal
      title={`${mode === 'edit' ? '编辑合同' : '添加合同'}`}
      visible={visible}
      // onOk={handleConfirm}
      // confirmLoading={btnLoading}
      onCancel={handleCancel}
      footer={footer}
      width={'60%'}
    >
      {content}
    </Modal>
  )
}

export default Form.create()(ContractModal);
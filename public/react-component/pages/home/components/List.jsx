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
import ContractModal from './Modal'
import './style.scss'

const { Search } = Input;
const { MonthPicker, RangePicker } = DatePicker;
const { Option } = Select;

function MyModal(props) {
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
      <Row gutter={24}>
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
      </Row>
      <Row gutter={24}>
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
      </Row>
      <Row gutter={24}>
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
      </Row>
      <Row gutter={24}>
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

function List(props) {

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <span>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <a>Invite {record.name}</a>
          <Divider type="vertical" />
          <a>Delete</a>
        </span>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];



  const [visible, setVisible] = useState(false)
  const [btnLoading, setBtnLoading] = useState(false)

  const handleModalVisible = () => {
    setVisible(true)
  }

  const handleOk = () => {
    setBtnLoading(true)
    setTimeout(() => {
      setVisible(false)
      setBtnLoading(false)

    }, 2000);
  }

  const handleCancel = () => {
    setVisible(false)
  }

  const WithFormModal = Form.create()(MyModal)





  return (
    <Fragment>
      <main className="contract-list">
        <section>
          <Button type="primary" onClick={handleModalVisible}>添加合同</Button>
          <Search
            placeholder="输入搜索内容"
            onSearch={value => console.log(value)}
            style={{ width: 200 }}
          />
        </section>
        <section className="contract-table">
          <Table columns={columns} dataSource={data} />
        </section>
      </main>
      <ContractModal
        visible={visible}
        handleOk={handleOk}
        btnLoading={btnLoading}
        handleCancel={handleCancel}
      />

    </Fragment>
  )
}


export default List


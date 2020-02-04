import React, { Fragment, useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
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
} from 'antd';
import * as _ from 'lodash'

import {
  fetchApi,
  setContracts,
  setOriginContracts,
  deleteApi,
  refreshTableData,
  setSearchValue
} from '../service/actions'

import ContractModal from './Modal'
import './style.scss'

const { Search } = Input;
const { MonthPicker, RangePicker } = DatePicker;
const { Option } = Select;
const { confirm } = Modal


function List(props) {

  const {
    contracts,
    table_loading
  } = useSelector(state => state.home)
  const dispatch = useDispatch()



  useEffect(() => {
    (async () => {
      let res = await fetchApi()
      dispatch(setContracts(_.get(res, ['data', 'data'])))
      dispatch(setOriginContracts(_.get(res, ['data', 'data'])))
    })()

  }, [])


  const columns = [
    {
      title: '合同类型',
      dataIndex: 'type',//对应数据项之中的
      render: text => <a>{text}</a>,
    },
    {
      title: '产品名称',
      dataIndex: 'product'
    },
    {
      title: '产品价格',
      dataIndex: 'price'
    },
    {
      title: '客户',
      dataIndex: 'client',
    },
    {
      title: '签约人',
      dataIndex: 'signer'
    },
    {
      title: '签约时间',
      dataIndex: 'signTime',
    },
    {
      title: '过期时间',
      dataIndex: 'DueTime'
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record, index) => (
        <span>
          <a onClick={() => { handleEdit(record) }}>修改</a>
          <Divider type="vertical" />
          <a onClick={handleDelete}>删除</a>
        </span>
      ),
    },
  ];


  const [visible, setVisible] = useState(false)
  const [mode, setMode] = useState('add')
  const info = useRef({})
  const contractId = useRef('99')

  const handleModalVisible = () => {
    setMode('add')
    setVisible(true)
  }




  const handleEdit = (tableinfo) => {
    setMode('edit')
    info.current = tableinfo
    setVisible(true)
  }

  const handleDelete = () => {
    confirm({
      title: '你确定要删除这一个合同吗',
      onOk: async () => {
        let res = await deleteApi()
        if (res) {
          message.success('删除成功')
          dispatch(refreshTableData())
        }
      }
    })
  }





  return (
    <Fragment>
      <main className="contract-list">
        <section>
          <Button type="primary" onClick={handleModalVisible}>添加合同</Button>

          <Input
            prefix={<Icon type="search" />}
            placeholder="输入搜索内容"
            style={{ width: 200 }}
            onChange={e => { dispatch(setSearchValue(e.target.value)) }}
          >
          </Input>
        </section>
        <section className="contract-table">
          <Table
            columns={columns}
            dataSource={contracts}
            rowKey={'id'}
            size="small"
            pagination={{ pageSize: 7 }}
            loading={table_loading}
          />
        </section>
      </main>
      <ContractModal
        visible={visible}
        setVisible={setVisible}
        mode={mode}
        info={info.current}
      />

    </Fragment>
  )
}


export default List


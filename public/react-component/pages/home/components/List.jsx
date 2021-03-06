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
  setContractLimit,
  deleteApi,
  refreshTableData,
  setSearchValue,
  fetchContractType,
  setContractTypes,
  fetchLimit
} from '../service/actions'

import ContractModal from './Modal'
import DeadLineModal from './DeadLineModal'
import moment from 'moment'
import './style.scss'

const { Search } = Input;
const { MonthPicker, RangePicker } = DatePicker;
const { Option } = Select;
const { confirm } = Modal


function List(props) {

  const {
    contracts,
    table_loading,
    limit
  } = useSelector(state => state.home)
  const {
    role
  } = useSelector(state => state.login)
  const dispatch = useDispatch()



  useEffect(() => {
    (async () => {
      let res = await fetchApi()
      let limitres = await fetchLimit()
      dispatch(setContractLimit(_.get(limitres, ['data', 'limitation'], 3)))
      dispatch(setContracts(_.get(res, ['data'], [])))
      dispatch(setOriginContracts(_.get(res, ['data'], [])))
    })()

  }, [])

  const findNameByid = (arr, id) => {
    let ret = arr.find(i => i.id === id)
    if (ret) {
      return ret.name
    } else {
      return ''
    }
  }

  const transformStatus = (id) => {
    switch (id) {
      case 1:
        return <Tag color="magenta">已过期</Tag>
      case 2:
        return <Tag color="volcano">即将过期</Tag>
      case 3:
        return <Tag color="green">有效期内</Tag>
      default:
        return ''
    }
  }

  const contractTypes = [{
    id: "1",
    name: '合同'
  }, {
    id: "2",
    name: '分包合同'
  }]

  const timeFormat = (time) => {
    if (time) {
      return moment(time).format('YYYY-MM-DD HH:mm')
    } else {
      return '时间未设置'
    }
  }


  const columns = [
    {
      title: '合同类型',
      dataIndex: 'contract_type',//对应数据项之中的
      filters: [
        {
          text: '合同',
          value: '1'
        },
        {
          text: '分包合同',
          value: '2'
        }
      ],
      filterMultiple: false,
      onFilter: (value, record) => {
        return value === record.contract_type;
      },
      render: text => <a>{findNameByid(contractTypes, text)}</a>,
    },
    {
      title: '产品名称',
      dataIndex: 'product'
    },
    {
      title: '部门',
      dataIndex: 'department'
    },
    {
      title: '客户/供应商',
      dataIndex: 'contract_client',
    },
    {
      title: '签约时间',
      dataIndex: 'signTime',
      render: text => <span>{timeFormat(text)}</span>,
    },
    {
      title: '过期时间',
      dataIndex: 'dueTime',
      render: text => <span>{timeFormat(text)}</span>,
    },
    {
      title: '过期状态',
      dataIndex: 'dueStatus',
      filters: [
        {
          text: '已过期',
          value: '1'
        },
        {
          text: '即将过期',
          value: '2'
        },
        {
          text: '有效期内',
          value: '3'
        }
      ],
      filterMultiple: false,
      onFilter: (value, record) => {
        return value === record.status;
      },
      render: text => transformStatus(text)
    },
    {
      title: '备注',
      dataIndex: 'resume'
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record, index) => (
        <span>
          <a onClick={() => { handleEdit(record) }}>修改</a>
          <Divider type="vertical" />
          <a className={role === 'admin' ? '' : 'hidden'} onClick={() => { handleDelete(record) }}>删除</a>
        </span>
      ),
    },
  ];



  const [visible, setVisible] = useState(false)
  const [deadlineModalVisible, setDeadlineModalVisible] = useState(false)
  const [mode, setMode] = useState('add')
  const info = useRef({})
  const contractId = useRef('99')
  console.log('contracts', contracts)

  const handleModalVisible = () => {
    setMode('add')
    setVisible(true)
  }




  const handleEdit = (tableinfo) => {
    setMode('edit')
    info.current = tableinfo
    setVisible(true)
  }

  const handleDelete = (info) => {
    confirm({
      title: '你确定要删除这一个合同吗',
      onOk: async () => {
        let res = await deleteApi(info.id)
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
          <Button className={role === 'admin' ? '' : 'hidden'} style={{ float: 'left' }} type="primary" onClick={handleModalVisible}>添加合同</Button>
          <Button style={{ float: 'left', marginLeft: '20px' }} type="primary" onClick={() => { setDeadlineModalVisible(true) }}>设定期限</Button>
          <Input
            prefix={<Icon type="search" />}
            placeholder="输入搜索的客户名"
            style={{ width: 200, float: "right" }}
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
        title="增加合同"
        visible={visible}
        setVisible={setVisible}
        mode={mode}
        info={info.current}
        role={role}
      />
      <DeadLineModal
        title="配置"
        limit={limit}
        visible={deadlineModalVisible}
        setVisible={setDeadlineModalVisible}
        role={role}
      />
    </Fragment>
  )
}


export default List


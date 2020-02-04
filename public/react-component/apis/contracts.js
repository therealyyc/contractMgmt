import Mock, { Random } from 'mockjs'

Random.extend({
  contractCollections: function (data) {
    var contracts = ['买房合同', '买车合同', '买地合同', '劳务合同', '其他合同']
    return this.pick(contracts)
  },
  departments: function (data) {
    var departments = ['税务部', '人力资源部', '财务部', '体育部']
    return this.pick(departments)
  }
})


const regex = /\/api\/contracts/
Mock.mock(`/api/contracts`, (req) => {
  return Mock.mock({
    code: 0,
    'data|1-10': [
      {
        "id|+1": 1,
        "type": '@contractCollections',
        "client": '@cname',
        "signTime": '@date',
        "DueTime": '@date',
        "price|100-10000.1-10": 100,
        "product": '产品名',
        "signer": '@cname',
        "department": '@departments'
      }
    ]
  })
}).setup({
  timeout: '1000'
})

Mock.mock(`/api/contract`, 'PUT', (req) => {
  return Mock.mock({
    code: 0,
    'data|1-10': [
      {
        "id|+1": 1,
        "type": '@contractCollections',
        "client": '@cname',
        "signTime": '@date',
        "DueTime": '@date',
        "price|100-10000.1-10": 100,
        "product": '产品名',
        "signer": '@cname',
        "department": '@departments'
      }
    ]
  })
})


Mock.mock(`/api/contract`, 'POST', (req) => {
  return Mock.mock({
    code: 0,
    'data|1-10': [
      {
        "id|+1": 1,
        "type": '@contractCollections',
        "client": '@cname',
        "signTime": '@date',
        "DueTime": '@date',
        "price|100-10000.1-10": 100,
        "product": '产品名',
        "signer": '@cname',
        "department": '@departments'
      }
    ]
  })
})

Mock.mock(`/api/contract`, 'DELETE', (req) => {
  return Mock.mock({
    code: 0,
    'data|1-10': [
      {
        "id|+1": 1,
        "type": '@contractCollections',
        "client": '@cname',
        "signTime": '@date',
        "DueTime": '@date',
        "price|100-10000.1-10": 100,
        "product": '产品名',
        "signer": '@cname',
        "department": '@departments'
      }
    ]
  })
})
// type
// client
// signTime
// DueTime
// price
// product
// signer
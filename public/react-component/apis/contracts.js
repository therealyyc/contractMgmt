import Mock, { Random } from 'mockjs'

Random.extend({
  contractCollections: function (data) {
    var contracts = ['1', '2']
    return this.pick(contracts)
  },
  departments: function (data) {
    var departments = ['税务部', '人力资源部', '财务部', '体育部']
    return this.pick(departments)
  },
  statuses: function (data) {
    var statues = ['1', '2', '3']
    return this.pick(statues)
  }
})

const regexlogin = /\/api\/login/
Mock.mock(regexlogin, (req) => {
  let ret = JSON.parse(req.body)
  return Mock.mock({
    code: 0,
    'data': {
      username: ret.username,
      role: 'admin'
    }
  })
}).setup({
  timeout: '1000'
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
        "signTime": '@date("yyyy-MM")',
        "DueTime": '@date("yyyy-MM")',
        "price|100-10000.1-10": 100,
        "product": '产品名',
        "signer": '@cname',
        "department": '@departments',
        "status": "@statuses"
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
        "department": '@departments',
        "status|1-3": "1"
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

Mock.mock(`/api/contract/type`, (req) => {
  return Mock.mock({
    code: 0,
    'data': [
      {
        "id": '1',
        "order": '1',
        "name": "合同"
      },
      {
        "id": '2',
        "order": '2',
        "name": "分包合同"
      }
    ]
  })
})

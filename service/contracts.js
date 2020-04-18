const { exec } = require('../db/mysql')
const moment = require('moment')

const getAllcontracts = () => {
  const sql = `select * from yc_contracts where state = 1;`
  return exec(sql)
  // return exec(sql).then(constracts => constracts)
}

const addContract = (params) => {
  const sql = `
  INSERT INTO contractmgmt.yc_contracts (contract_type,oldClient,contract_client,signTime,dueTime,price,product,signer,department,resume)
  VALUES (
    '${params.contract_type}',
    '${params.oldClient}',
    '${params.contract_client}',
    '${moment(params.signTime).format('YYYY-MM-DD')}',
    '${moment(params.dueTime).format('YYYY-MM-DD')}',
    ${params.price || null},
    '${params.product}',
    '${params.signer}',
    '${params.department}',
    '${params.resume}'
    )
  `
  return exec(sql).catch(err => console.log(err))
}

const editContract = (id, params) => {
  const sql = `
  UPDATE contractmgmt.yc_contracts
  SET
  contract_type = '${params.contract_type}',
  oldClient='${params.oldClient}',
  contract_client = '${params.contract_client}',
  signTime = '${moment(params.signTime).format('YYYY-MM-DD')}',
  dueTime = '${moment(params.dueTime).format('YYYY-MM-DD')}',
  price = ${params.price || null},
  product = '${params.product}',
  signer = '${params.signer}',
  department = '${params.department}',
  resume = '${params.resume}'
  where id = ${id}
  `
  console.log('sql', sql)
  return exec(sql).catch(err => console.log(err))
}

const deleteContract = (id) => {
  const sql = `
  UPDATE contractmgmt.yc_contracts
  SET
  state = 0
  where id = ${id}
  `
  return exec(sql).catch(err => console.log(err))
}


const getContractLimitation = () => {
  const sql = `
  select limitation
  from contractmgmt.yc_limitation
  where id = 1
  `
  return exec(sql).catch(err => console.log(err))
}

const updateContractLimitation = (limit) => {
  const sql = `
    UPDATE contractmgmt.yc_limitation
    SET
    limitation = ${limit}
    where id = 1;
  `
  return exec(sql).catch(err => console.log(err))
}


module.exports = {
  getAllcontracts,
  addContract,
  editContract,
  deleteContract,
  getContractLimitation,
  updateContractLimitation
}



const { exec } = require('../db/mysql')

const getAllcontracts = () => {
  const sql = `select * from yc_contracts where state = 1;`
  return exec(sql)
  // return exec(sql).then(constracts => constracts)
}

const addContract = (params) => {
  const sql = `
  INSERT INTO contractmgmt.yc_contracts (contract_type,contract_client,signTime,dueTime,price,product,signer,department)
  VALUES (
    '${params.contract_type}',
    '${params.contract_client}',
    '${params.signTime}',
    '${params.dueTime}',
    ${params.price},
    '${params.product}',
    '${params.signer}',
    '${params.department}')
  `
  return exec(sql).catch(err => console.log(err))
}

const editContract = (id, params) => {
  const sql = `
  UPDATE contractmgmt.yc_contracts
  SET
  contract_type = '${params.contract_type}',
  contract_client = '${params.contract_client}',
  signTime = '${params.signTime}',
  dueTime = '${params.dueTime}',
  price = ${params.price},
  product = '${params.product}',
  signer = '${params.signer}',
  department = '${params.department}'
  where id = ${id}
  `
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

module.exports = {
  getAllcontracts,
  addContract,
  editContract,
  deleteContract
}



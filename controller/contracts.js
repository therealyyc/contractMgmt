// YC_CONTRACTS
const contractsService = require('../service/contracts')
const _ = require('lodash')
const moment = require('moment')

const getAllcontracts = async () => {
  let limitation;
  let limitationRow = await contractsService.getContractLimitation()
  limitation = limitationRow[0].limitation
  let contracts = await contractsService.getAllcontracts()
  //console.log()
  let limitedContracts = _.map(contracts, (contract) => {
    let recordDueDate = moment(contract.dueTime)
    /**
     * 1.dueDate超过今天 --- 已过期  1
     * 2.dueDate + 限制时间 超过今天 --- 即将过期 2
     * 3.dueDate + 限制时间小于今天  ---- 安全
     */
    if (recordDueDate < moment()) {
      _.set(contract, 'dueStatus', 1)
    } else if (recordDueDate < moment().add(limitation, 'M')) {
      _.set(contract, 'dueStatus', 2)
    } else {
      _.set(contract, 'dueStatus', 3)
    }
    return {
      ...contract
    }
  })
  return limitedContracts
}
const addContract = (params) => {
  return contractsService.addContract(params)
}

const editContract = (id, params) => {
  return contractsService.editContract(id, params)
}

const deleteContract = (id) => {
  return contractsService.deleteContract(id)
}

const getContractLimitation = () => {
  return contractsService.getContractLimitation()
}

const updateContractLimitation = (limit) => {
  return contractsService.updateContractLimitation(limit)
}


module.exports = {
  getAllcontracts,
  addContract,
  editContract,
  deleteContract,
  getContractLimitation,
  updateContractLimitation
}
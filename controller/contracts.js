// YC_CONTRACTS
const contractsService = require('../service/contracts')

const getAllcontracts = () => {
  return contractsService.getAllcontracts()
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


module.exports = {
  getAllcontracts,
  addContract,
  editContract,
  deleteContract
}
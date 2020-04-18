// YC_CONTRACTS
const loginService = require('../service/login')
const _ = require('lodash')
const moment = require('moment')


const validateUser = async ({ username, password }) => {
  let ret = await loginService.validateName({ username, password })
  return ret;
}


module.exports = {
  validateUser
}
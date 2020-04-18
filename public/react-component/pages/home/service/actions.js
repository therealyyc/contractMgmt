import * as _ from 'lodash'
import axios from 'axios'

export const ACTION_SET_CONTRACTS = 'SET_CONTRACTS'
export const ACTION_SET_ORIGIN_CONTRACTS = 'SET_ORIGIN_CONTRACTS'
export const ACTION_SET_TABLE_LOADING = 'SET_TABLE_LOADING'
export const ACTION_SET_SEARCH_VALUE = 'SET_SEARCH_VALUE'
export const ACTION_SET_CONTRACT_TYPES = 'CONTRACT_TYPES'
export const ACTION_SET_CONTRACT_LIMIT = 'SET_CONTRACT_LIMIT'


export function setContracts(contracts) {
  return {
    type: ACTION_SET_CONTRACTS,
    payload: contracts,
    name: 'contracts'
  }
}

export function setOriginContracts(origin_contracts) {
  return {
    type: ACTION_SET_ORIGIN_CONTRACTS,
    payload: origin_contracts,
    name: 'origin_contracts'
  }
}

export function setTableLoading(table_loading) {
  return {
    type: ACTION_SET_TABLE_LOADING,
    payload: table_loading,
    name: 'table_loading'
  }
}

export function setSearchValue(searchValue) {
  return {
    type: ACTION_SET_SEARCH_VALUE,
    payload: searchValue
  }
}

export function refreshTableData() {
  return (dispatch, getState) => {
    console.log('111')
    dispatch(setTableLoading(true))
    axios({
      url: `/api/contract/list`,
      method: 'GET'
    }).then((res) => {
      dispatch(setContracts(_.get(res, ['data'], [])))
      dispatch(setOriginContracts(_.get(res, ['data'], [])))
      dispatch(setTableLoading(false))
    })
  }
}

export const fetchApi = () => {
  return Promise.resolve(
    axios({
      url: `/api/contract/list`,
      method: 'GET'
    })
  )
}

export const addApi = (data) => {
  let postData = {
    contract_type: data.contract_type,
    contract_client: data.contract_client,
    oldClient: data.oldClient,
    signTime: data.signTime,
    dueTime: data.dueTime,
    price: data.price,
    product: data.product,
    signer: data.signer,
    department: data.department,
    resume: data.resume
  }
  return Promise.resolve(
    axios({
      url: `/api/contract/addContract`,
      method: 'POST',
      data: postData
    })
  )
}

export const editApi = (data, id) => {
  let putData = {
    contract_type: data.contract_type,
    contract_client: data.contract_client,
    oldClient: data.oldClient,
    signTime: data.signTime,
    dueTime: data.dueTime,
    price: data.price,
    product: data.product,
    signer: data.signer,
    department: data.department,
    resume: data.resume
  }
  return Promise.resolve(
    axios({
      url: `/api/contract/editContract?id=${id}`,
      method: 'PUT',
      data: putData
    })
  )
}

export const deleteApi = (id) => {
  return Promise.resolve(
    axios({
      url: `/api/contract/deleteContract?id=${id}`,
      method: 'DELETE'
    })
  )
}


/**
 * logic code
 */

export const fetchContractType = () => {
  return Promise.resolve(
    axios({
      url: `/api/contract/type`,
      method: 'GET'
    })
  )
}

export const setContractTypes = (contractType) => {
  return {
    type: ACTION_SET_CONTRACT_TYPES,
    payload: contractType,
    name: 'contractTypes'
  }
}


export const fetchLimit = () => {
  return Promise.resolve(
    axios({
      url: `/api/contract/limitation`,
      method: 'GET'
    })
  )
}


export const postEditLimit = (values) => {
  let data = {}
  data.limitation = values.limit
  return Promise.resolve(
    axios({
      url: `/api/contract/limitation`,
      method: 'PUT',
      data
    })
  )
}

export const setContractLimit = (limit) => {
  return {
    type: ACTION_SET_CONTRACT_LIMIT,
    payload: limit,
    name: 'limit'
  }
}
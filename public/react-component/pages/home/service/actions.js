import * as _ from 'lodash'
import axios from 'axios'

export const ACTION_SET_CONTRACTS = 'SET_CONTRACTS'
export const ACTION_SET_ORIGIN_CONTRACTS = 'SET_ORIGIN_CONTRACTS'
export const ACTION_SET_TABLE_LOADING = 'SET_TABLE_LOADING'
export const ACTION_SET_SEARCH_VALUE = 'SET_SEARCH_VALUE'
export const ACTION_SET_CONTRACT_TYPES = 'CONTRACT_TYPES'


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
      url: `/api/contracts`,
      method: 'GET'
    }).then((res) => {
      dispatch(setContracts(_.get(res, ['data', 'data'])))
      dispatch(setOriginContracts(_.get(res, ['data', 'data'])))
      dispatch(setTableLoading(false))
    })
  }
}

export const fetchApi = () => {
  return Promise.resolve(
    axios({
      url: `/api/contracts`,
      method: 'GET'
    })
  )
}

export const addApi = () => {
  return Promise.resolve(
    axios({
      url: `/api/contracts`,
      method: 'POST'
    })
  )
}

export const editApi = () => {
  return Promise.resolve(
    axios({
      url: `/api/contracts`,
      method: 'PUT'
    })
  )
}

export const deleteApi = () => {
  return Promise.resolve(
    axios({
      url: `/api/contracts`,
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


export const postEditLimit = (limit) => {
  return Promise.resolve(
    axios({
      url: `/api/contracts`,
      method: 'POST'
    })
  )
}
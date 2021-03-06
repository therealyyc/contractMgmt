import {
  ACTION_SET_CONTRACTS,
  ACTION_SET_ORIGIN_CONTRACTS,
  ACTION_SET_TABLE_LOADING,
  ACTION_SET_SEARCH_VALUE,
  ACTION_SET_CONTRACT_TYPES,
  ACTION_SET_CONTRACT_LIMIT
} from './actions'

const initialState = {
  contracts: [],
  origin_contracts: [],
  searchValue: '',
  table_loading: false,
  contractTypes: [],
  limit: 3
}

export default function (state = initialState, action) {
  const { type, payload, name } = action
  const { contracts, origin_contracts } = state
  switch (type) {
    case ACTION_SET_CONTRACTS:
      return Object.assign({}, state, {
        [name]: payload
      })
    case ACTION_SET_ORIGIN_CONTRACTS:
      return Object.assign({}, state, {
        [name]: payload
      })
    case ACTION_SET_TABLE_LOADING:
      return Object.assign({}, state, {
        [name]: payload
      })
    case ACTION_SET_CONTRACT_TYPES:
      return Object.assign({}, state, {
        [name]: payload
      })
    case ACTION_SET_CONTRACT_LIMIT:
      return Object.assign({}, state, {
        [name]: payload
      })
    case ACTION_SET_SEARCH_VALUE:
      if (!payload) {
        return Object.assign({}, state, {
          contracts: origin_contracts
        })
      } else {
        const searchKeys = ['contract_client']
        let ret = []
        let filterArr = origin_contracts.map(contract => {
          let rett = []
          for (let i = 0; i < searchKeys.length; i++) {
            rett.push(contract[searchKeys[i]])
          }
          return rett
        })
        filterArr.map((arr, index) => {
          console.log('arr', arr)
          arr.some(a => a.includes(payload))
            ? ret.push(origin_contracts[index]) : null
        })
        return Object.assign({}, state, {
          contracts: ret
        })
      }
    default:
      return state
  }
  return state;
}
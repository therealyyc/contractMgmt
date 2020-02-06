import {
  ACTION_SET_IS_LOGIN,
  ACTION_SET_LOGIN_LOADING,
  ACTION_SET_ROLE,
  ACTION_SET_REQUEST_LOGIN,
  ACTION_SET_LOGIN_SUCCESS,
  ACTION_SET_LOGIN_FAILURE
} from './action'


const initialState = {
  isLogin: false,
  loginLoading: false,
  role: "admin"
}




export default function (state = initialState, action) {
  const { type, payload, name } = action
  switch (action.type) {
    case ACTION_SET_IS_LOGIN:
      return Object.assign({}, state, {
        [name]: payload
      })
    case ACTION_SET_LOGIN_LOADING:
      return Object.assign({}, state, {
        [name]: payload
      })
    case ACTION_SET_ROLE:
      return Object.assign({}, state, {
        [name]: payload
      })
    case ACTION_SET_REQUEST_LOGIN:
      return Object.assign({}, state, {
        isLogin: false,
        loginLoading: true
      })
    case ACTION_SET_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLogin: true,
        loginLoading: false
      })
    case ACTION_SET_LOGIN_FAILURE:
      return Object.assign({}, state, {
        isLogin: false,
        loginLoading: false
      })
    default:
      return state
  }
}
import axios from 'axios'

export const ACTION_SET_IS_LOGIN = 'SET_IS_LOGIN'
export const ACTION_SET_LOGIN_LOADING = 'SET_LOGIN_LOADING'
export const ACTION_SET_ROLE = 'SET_ROLE'
export const ACTION_SET_REQUEST_LOGIN = 'SET_REQUEST_LOGIN'
export const ACTION_SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS'
export const ACTION_SET_LOGIN_FAILURE = 'SET_LOGIN_FAILURE'


export function setIsLogin(isLogin) {
  return {
    type: ACTION_SET_IS_LOGIN,
    payload: isLogin,
    name: 'isLogin'
  }
}
export function setLoginLoading(loginLoading) {
  return {
    type: ACTION_SET_LOGIN_LOADING,
    payload: loginLoading,
    name: 'loginLoading'
  }
}
export function setRole(role) {
  return {
    type: ACTION_SET_ROLE,
    payload: role,
    name: 'role'
  }
}


export async function request_login(param) {

  return Promise.resolve(
    axios({
      url: `/api/login`,
      method: 'POST',
      data: param,
    }))
}

export function set_request_login() {
  return {
    type: ACTION_SET_REQUEST_LOGIN
  }
}
export function request_login_success() {
  return {
    type: ACTION_SET_LOGIN_SUCCESS
  }
}
export function request_login_failure() {
  return {
    type: ACTION_SET_LOGIN_FAILURE
  }
}
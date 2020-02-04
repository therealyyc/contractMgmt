import { combineReducers } from 'redux'
import login from '../pages/login/service/reducer.js'
import home from '../pages/home/service/reducer'


const reducer = combineReducers({
  login,
  home
})

export default reducer;
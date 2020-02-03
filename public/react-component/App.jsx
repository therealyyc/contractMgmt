import React, { Fragment } from 'react'
import { Provider } from 'react-redux'
import store from './store/index.js'
import Login from './pages/login/components/index.jsx'
import './test.scss'

function App(props) {
  return (
    <Fragment>
      <Provider store={store}>
        <h1>入口文件</h1>
        <Login />
      </Provider>
    </Fragment>
  )
}


export default App


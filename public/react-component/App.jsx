import React, { Fragment } from 'react'
import { Provider } from 'react-redux'
import store from './store/index.js'
import Login from './pages/login/components/index.jsx'
import Home from './pages/home/index.jsx'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import 'antd/dist/antd.css';
import './apis/contracts'

function App(props) {
  return (
    <Fragment>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Login}>
            </Route>
            <Route exact path="/home" component={Home}>
            </Route>
          </Switch>
        </Router>
      </Provider>
    </Fragment>
  )
}


export default App


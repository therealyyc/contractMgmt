import React, { Fragment, Component } from 'react'
import { Provider, useSelector } from 'react-redux'
import store from './store/index.js'
import Login from './pages/login/components/index.jsx'
import Home from './pages/home/index.jsx'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory
} from 'react-router-dom'
import 'antd/dist/antd.css';
// import './apis/contracts'



function returnRedirect() {
  return (<Redirect to='/' />)
}

function Test() {
  let history = useHistory();
  return (
    <div >您还没有登陆，点击<a onClick={() => {
      history.replace('/')
    }}>这里</a>跳转到登录页面</div>
  )
}

function PrivateRoute({
  component: Comp, isLogin, ...rest
}) {
  return (
    <Route {...rest} render={
      (props) => {
        return true ? (
          <Comp {...props}></Comp>
        ) : (
            <Redirect to={{
              pathname: '/Test',
              state: { redirectpath: props.location.pathname }
            }}></Redirect>
          )
      }
    }>
    </Route>
  )
}

function App(props) {
  const { isLogin } = useSelector(state => state.login)
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Login}>
          </Route>
          <PrivateRoute exact path="/home" component={Home} isLogin={isLogin}>
          </PrivateRoute>
          <Route exact path="/Test" component={Test}>
          </Route>
        </Switch>
      </Router>
    </Fragment>
  )
}


export default App


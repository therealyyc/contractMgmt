import React, { Fragment, Component, useEffect } from 'react'
import { Provider, useSelector, useDispatch } from 'react-redux'
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
import {
  request_login_success
} from './pages/login/service/action'
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
  console.log('priaveteComp', isLogin)
  return (
    <Route {...rest} render={
      (props) => {
        return isLogin ? (
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
  const dispatch = useDispatch()

  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Login}>
          </Route>
          <PrivateRoute exact path="/home" component={Home} isLogin={JSON.parse(localStorage.getItem('loginStatus'))}>
          </PrivateRoute>
          <Route exact path="/Test" component={Test}>
          </Route>
        </Switch>
      </Router>
    </Fragment>
  )
}


export default App


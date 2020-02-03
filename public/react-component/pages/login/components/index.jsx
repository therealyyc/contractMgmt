import React from 'react'
import { connect } from 'react-redux'

function Login(props) {
  console.log('props', props)
  return (
    <div>
      Login
    </div>
  )
}


const mapStatetoProps = (state) => ({
  login: state.login
})

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}
export default connect(mapStatetoProps, mapDispatchToProps)(Login);


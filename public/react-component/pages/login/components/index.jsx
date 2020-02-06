import React, { Fragment, useState } from 'react'
import { connect, useDispatch } from 'react-redux';
import { Form, Icon, Input, Button, Row, Col, message } from 'antd'
import { useHistory } from "react-router-dom";
import './style.scss'
import {
  postLoginApi, request_login,
  request_login_success,
  request_login_failure
} from '../service/action'

function LoginForm(props) {

  const { form } = props;
  const { getFieldDecorator } = form;
  let history = useHistory()
  let dispatch = useDispatch()
  const [btnLoading, setBtnLoading] = useState(false)

  const formItemLayout = {
    labelCol: {
      xs: { span: 16 },
      sm: { span: 4 },
    },
    wrapperCol: {
      xs: { span: 20 },
      sm: { span: 16 },
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    form.validateFields(async (err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
        setBtnLoading(true)
        const { username, password } = values
        let res = await request_login(values)
        setBtnLoading(false)
        console.log('res', res)
        if (res.status == 200) {
          dispatch(request_login_success())
          history.replace('/home')
        } else {
          dispatch(request_login_failure())
          message.error('用户名或密码错误')
        }
      }
    });
  }

  return (
    <div className="form-container">
      <Form onSubmit={handleSubmit} className="login-form" {...formItemLayout}>
        <Row gutter={[0, 160]}>
          <Col>
            <Form.Item label="用户名">
              {getFieldDecorator('username', {
                rules: [{ required: true, message: '请输入用户名' }],
              })(
                <Input
                  size="large"
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="用户名"
                />,
              )}
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[0, 32]}>
          <Form.Item label="密码">
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码' }],
            })(
              <Input
                size="large"
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
        </Row>
        <Form.Item wrapperCol={{
          xs: { span: 20 },
          sm: { span: 22 },
        }}>
          <Button type="primary" htmlType="submit" size="large" className="login-form-button" loading={btnLoading}>
            登陆
          </Button>
        </Form.Item>
      </Form>
    </div>
  )

}

const WrappedLoginForm = Form.create({ name: 'normal_login' })(LoginForm);

const Login = (props) => {
  return (
    <Fragment>
      <main className="login-page">
        <section className="logo-container">

        </section>
        <section className="login-container">
          <WrappedLoginForm />
        </section>
      </main>
    </Fragment>
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


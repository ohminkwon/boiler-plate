import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../../_actions/user_action'

import { Form, Input, Button, Checkbox } from 'antd'
import { MailOutlined, LockOutlined } from '@ant-design/icons'

function LoginPage() {

  let navigate = useNavigate()
  const dispatch = useDispatch()

  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value)
  }
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
  }

  // const onSubmitHandler = (event) => {
  //   event.preventDefault();

  //   console.log('Email', Email)
  //   console.log('Password', Password)

  //   let body = {
  //     email: Email,
  //     password: Password
  //   }

  //   dispatch(loginUser(body))
  //     .then(response => {
  //       if(response.payload.loginSuccess){
  //         navigate('/')
  //       } 
  //       else{
  //         alert('아이디/비밀번호가 잘못되었습니다.')
  //       }
  //     })
  // }

  const onFinish = (values) => {
    console.log('Success:', values);

    console.log('Email', Email)
    console.log('Password', Password)

    let body = {
      email: Email,
      password: Password
    }

    dispatch(loginUser(body))
      .then(response => {
        if(response.payload.loginSuccess){
          navigate('/')
        } 
        else{
          alert('아이디/비밀번호가 잘못되었습니다.')
        }
      })
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  }

  return (
    // <div style={{
    //       display: 'flex', 
    //       justifyContent: 'center', 
    //       lignItems: 'center', 
    //       width: '100%', 
    //       height: '100vh'}}
    //     onSubmit={onSubmitHandler}>
    //   <form style={{display: 'flex', flexDirection: 'column'}}>
    //     <label>Email</label>
    //     <input type="email" value={Email} onChange={onEmailHandler} />
    //     <label>Password</label>
    //     <input type="password" value={Password} onChange={onPasswordHandler} />
    //     <br/>
    //     <button>
    //       Login
    //     </button>
    //   </form>      
    // </div>

    <div style={{
      marginTop:'100px',
      display: 'flex',      
      justifyContent: 'center', 
      lignItems: 'center', 
      width: '100%', 
      height: '100vh'}}>

      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"        
          rules={[
            {
              required: true,
              type: "email",
              message: 'Please input your Email!',
            },
          ]}     
        >
          <Input            
            prefix={<MailOutlined style={{ color: "rgba(0,0,0,.25)" }}/>} 
            placeholder='Email' 
            value={Email} 
            onChange={onEmailHandler}/>
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}        
        >
          <Input.Password
            prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }}/>} 
            placeholder='Password' 
            value={Password} 
            onChange={onPasswordHandler}/>
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
        
    </div>
    
  )
}

export default LoginPage
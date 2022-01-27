import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../../_actions/user_action'

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

  const onSubmitHandler = (event) => {
    event.preventDefault();

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
          alert('error')
        }
      })
  }

  return (
    <div style={{
          display: 'flex', 
          justifyContent: 'center', 
          lignItems: 'center', 
          width: '100%', 
          height: '100vh'}}
        onSubmit={onSubmitHandler}>
      <form style={{display: 'flex', flexDirection: 'column'}}>
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler} />
        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHandler} />
        <br/>
        <button>
          Login
        </button>
      </form>      
    </div>
  )
}

export default LoginPage
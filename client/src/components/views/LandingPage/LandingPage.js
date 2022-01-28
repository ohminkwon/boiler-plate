import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../../_actions/user_action'

import { Button } from 'antd';

function LandingPage() {

  let navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get('/api/hello')
    .then(response => console.log(response.data))
  }, [])

  const onClickHandler = () => {
    dispatch(logoutUser())    
      .then(response => {
        if(response.payload.success){
          navigate('/login')
        }
        else{          
          alert('로그인 상태가 아닙니다. \n로그인 페이지로 이동해주세요.')
        }
      })
  }

  const onClickRegisterHandler = () => {
    navigate('/register')        
  }

  const onClickloginHandler = () => {
    navigate('/login')        
  } 

  return (  
    <div style={{
      display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh'
    }}>
      <h2>시작 페이지</h2>

      <div>
        <Button style={{margin: '2px'}} type= "primary" onClick={onClickRegisterHandler}>
          회원가입
        </Button>
        <Button style={{margin: '2px'}} type= "primary" onClick={onClickHandler}>
          로그아웃
        </Button>
      </div>

      <div>
        <Button style={{margin: '2px'}} type= "primary" onClick={onClickloginHandler}>
          *로그인 페이지로 이동*
        </Button>
      </div>
    </div>
  )
}

export default LandingPage
import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../../_actions/user_action'


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
          alert('로그아웃 실패')
        }
      })
  }

  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh'
    }}>
      <h2>시작 페이지</h2>

      <button onClick={onClickHandler}>
        로그아웃
      </button>
    </div>
  )
}

export default LandingPage
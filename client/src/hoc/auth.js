import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { auth } from '../_actions/user_action'

// option -> null: 아무나 출입가능, true: 로그인한 유저만 가능, false: 로그인유저 불가능
export default function (SpecificComponent, option, adminRoute = null){

  function AuthenticationCheck(props){

    let navigate = useNavigate()
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(auth())
        .then(response => {
          console.log(response)

          //로그인 하지 않은 상태
          if(!response.payload.isAuth){
            if(option){
              navigate('/login')
            }
          }
          //로그인 한 상태
          else{
            if(adminRoute && !response.payload.isAdmin){
              navigate('/')
            }
            else{
              if(option === false)
                navigate('/')              
            }
          }
        })
    }, [])

    return (
      <SpecificComponent/>
    )
  }

  return <AuthenticationCheck/>
}
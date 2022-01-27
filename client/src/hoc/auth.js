import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { auth } from '../_actions/user_action'

// option -> null: 아무나 출입가능, true: 로그인한 유저만 가능, false: 로그인유저 불가능
export default function (SpecificComponent, option, adminRoute = null){

  function AuthenticationCheck(props){

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(auth())
        .then(response => {
          console.log(response)
        })
    }, [])

    return (
      <SpecificComponent/>
    )
  }

  return <AuthenticationCheck/>
}
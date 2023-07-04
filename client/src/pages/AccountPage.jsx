import React, { useContext } from 'react'
import { UserContext } from '../UserContext'
import { Navigate } from 'react-router-dom'

export function AccountPage(){
  const {user} = useContext(UserContext)
  console.log(user,"Account page is rendered")
  // if(!user){
  //   return <Navigate to='/login' />
  // }
  return (
    <div>
        account page for {user.name}
    </div>
  )
}

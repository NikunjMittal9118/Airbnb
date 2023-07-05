import React, { useContext } from 'react'
import { UserContext } from '../UserContext'
import { Navigate } from 'react-router-dom'

export function AccountPage(){
  const {user,ready} = useContext(UserContext)
  console.log("Account page is rendered")
  return (
    <div>
        account page for me {user.name}
    </div>
  )
}

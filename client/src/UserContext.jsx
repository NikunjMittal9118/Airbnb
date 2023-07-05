import React, { createContext, useEffect, useState } from 'react'
import axios from "axios"
export const UserContext = createContext({})


export function UserContextProvider(props){
  console.log("Provider is rendered")

  const [user,setUser] = useState(null)
  const [ready,setReady] = useState(false);
  useEffect(()=>{
    console.log("Useffect is rendered")
    
    if(!user){
        axios.get('http://localhost:9000/profile',{withCredentials:true}).then((value)=>{
          setUser(value.data)
          setReady(true)
        }).catch(err => alert("No user found, Register or Login now"))
    }
  },[])
  
  return (
    <UserContext.Provider value={{user,setUser,ready}}>
      {props.children}
    </UserContext.Provider>
  )
}

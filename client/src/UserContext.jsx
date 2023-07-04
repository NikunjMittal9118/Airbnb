import React, { createContext, useEffect, useState } from 'react'
import axios from "axios"
export const UserContext = createContext()


export function UserContextProvider(props){
  console.log("Provider is rendered")

  const [user,setUser] = useState(null)
  useEffect(()=>{
    console.log("Useffect is rendered")
    
    if(!user){
        axios.get('http://localhost:9000/profile',{withCredentials:true}).then((value)=>{
          setUser(value.data)
        }).catch(err => alert("No user found, Regiser now"))
    }
  },[])
  
  return (
    <UserContext.Provider value={{user,setUser}}>
      {props.children}
    </UserContext.Provider>
  )
}


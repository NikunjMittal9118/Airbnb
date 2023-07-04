import React, { createContext, useEffect, useState } from 'react'
import axios from "axios"
export const UserContext = createContext()


export function UserContextProvider(props){
  const [user,setUser] = useState(null)
  useEffect(()=>{
    if(!user){
      axios.get('http://localhost:9000/profile',{withCredentials:true})
      // try{
      //   const getUser = await axios.get('http://localhost:9000/profile')
      //   setUser(getUser)
      // }
      // catch(err){
      //   alert("No user found, Regiser now")
      // }
    }
  },[])
  
  return (
    <UserContext.Provider value={{user,setUser}}>
      {props.children}
    </UserContext.Provider>
  )
}


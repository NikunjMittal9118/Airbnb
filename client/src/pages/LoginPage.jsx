import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from "axios"
import { UserContext } from '../UserContext'

export const LoginPage = () => {
  const [userName,setName] = useState('')
  const [password,setPassword] = useState('')
  const [direct,setDirect] = useState(false)
  const defaultUser = useContext(UserContext)
  async function submit(e){
    e.preventDefault()
    try{
      const userInfo = await axios.post('http://localhost:9000/login', {userName,password} ,{withCredentials: true})
      console.log("setUser is called")
      defaultUser.setUser(userInfo.data)
      alert("You are successfully logged in")
      console.log("setDirect is called")
      setDirect(true)
      console.log(direct)
    }
    catch(err){
      console.log(err)
      alert("Login failed")
    }
  }

  if(direct===true){
    console.log(direct,"Direct condition is called")
    return <Navigate to='/' />
  }

  return (
    <div className='mt-4 grow flex items-center justify-around'>
      <div className='mb-64'>
        <h1 className='text-4xl text-center mb-4 font-medium'>Login</h1>
        <form className='max-w-md mx-auto' onSubmit={submit}>
          <input type='text' placeholder='Enter your userName' value={userName} onChange={(e) => setName(e.target.value)}/>
          <input type='password' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)}/>
          <button className='primary'>Login</button>
        </form>
        <div className='text-center py-2 font-semibold text-gray-500'>Don't have account yet? <Link className="underline text-black" to='/register'>Register now</Link> </div>
      </div>
    </div>
  )
}

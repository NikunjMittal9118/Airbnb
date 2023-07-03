import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
export const RegisterPage = () => {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  function submit(e){
    e.preventDefault()
    axios.post('http://localhost:9000/register', {name,email,password});
  }
  return (
    <div className='mt-4 grow flex items-center justify-around'>
      <div className='mb-64'>
        <h1 className='text-4xl text-center mb-4 font-medium'>Register</h1>
        <form className='max-w-md mx-auto' onSubmit={submit}>
          <input type='text' placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)}/>
          <input type='email' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input type='password' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)}/>
          <button className='primary'>Register</button>
        </form>
        <div className='text-center py-2 font-semibold text-gray-500'>Aldready a member? <Link className="underline text-black" to='/login'>Login</Link> </div>
      </div>
    </div>
  )
}

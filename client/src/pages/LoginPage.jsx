import React from 'react'
import { Link } from 'react-router-dom'

export const LoginPage = () => {
  return (
    <div className='mt-4 grow flex items-center justify-around'>
      <div className='mb-64'>
        <h1 className='text-4xl text-center mb-4 font-medium'>Login</h1>
        <form className='max-w-md mx-auto'>
          <input type='email' placeholder='Enter your email' />
          <input type='password' placeholder='Enter your password' />
          <button className='primary'>Login</button>
        </form>
        <div className='text-center py-2 font-semibold text-gray-500'>Don't have account yet? <Link className="underline text-black" to='/register'>Register now</Link> </div>
      </div>
    </div>
  )
}

import React from 'react'
import { Header } from './header'
import { Outlet } from 'react-router-dom'

function Layout() {
  console.log("Layout is rendered")
  return (
    <div className='p-4 flex flex-col min-h-screen'>
        <Header />
        <Outlet />
    </div>
  )
}

export default Layout
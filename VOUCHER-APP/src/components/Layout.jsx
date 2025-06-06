import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
   <main className='flex flex-col min-h-screen p-5 bg-gray-100'>
    <Header />
    <Outlet />
   </main>
  )
}

export default Layout

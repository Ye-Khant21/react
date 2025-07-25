import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

const Layout = () => {
  return (
   <main className='flex flex-col min-h-screen p-5 bg-gray-100'>
    <Header />
    <Outlet />
    <Toaster />

   </main>
  )
}

export default Layout

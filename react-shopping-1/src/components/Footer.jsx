import React from 'react'

function Footer() {
  return (
    <footer className='mx-5 mt-auto bg-black text-white text-center p-2'>    
    @{new Date().getFullYear()} <a href="https://mms-it.com" className='text-red-500'>MMS-IT</a>. All Right Reserved
    </footer>
    
    
  )
}

export default Footer

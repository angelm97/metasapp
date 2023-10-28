import React from 'react'
import { Icon } from '@iconify/react';

const Header = () => {
  return (
    <div style={{height: '40px'}} className='bg-white flex relative justify-between shadow text-gray-700'> 
      <div className='flex items-center pl-4'>
      
      <Icon style={{fontSize: '30'}}  className=' text-lg mr-2' icon="gridicons:fire" />
    
        <a className=' font-bold' href="/">Metas App</a>
      </div>
      <nav className='flex items-center'>
      <Icon  style={{fontSize: '25'}} className='mr-3 cursor-pointer hover:bg-gray-200 rounded-lg' icon="ic:outline-account-circle" />
      </nav>
    </div>
  )
}

export default Header

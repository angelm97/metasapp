import React from 'react'
import { Icon } from '@iconify/react';

const Links = (proms) => {
    return (
        <div className='flex items-center justify-start cursor-pointer  p-3 hover:bg-gray-500 hover:text-white'>
            <Icon className='mr-2 text-2xl' icon={proms.icon} />
            <p>{proms.text}</p>
        </div>
    )
}

export default Links

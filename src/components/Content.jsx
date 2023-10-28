import React from 'react'
import Links from './multipurpose/Links'

const Content = ({children}) => {
  return (
    <div className='contentH flex'>
      <aside className='flex flex-col text-gray-700 bg-gray-100 shadow w-60 '> 
        <Links icon='majesticons:clipboard-list-line' text='Lista de Metas' />
        <Links text='Nueva Metas' icon='ph:plus-circle-bold' />
      </aside>
      <main className='w-full h-full overflow-scroll'>
        {children}
      </main>
    </div>
  )
}

export default Content

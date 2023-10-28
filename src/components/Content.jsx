import React from 'react'

const Content = ({children}) => {
  return (
    <>
      <sidenav>
        <a href="/lista">Lista</a>
        <a href="/Crear">Crear</a>
      </sidenav>
      <main>
        {children}
      </main>
    </>
  )
}

export default Content

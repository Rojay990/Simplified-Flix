import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

const Layout = ({children, setSearch}) => {
  return (
    <>
      <Nav setSearch = {setSearch} />

      <main> {children}</main>
      <Footer />
      
    </>
  )
}

export default Layout
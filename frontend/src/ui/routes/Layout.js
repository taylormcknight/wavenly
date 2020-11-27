import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Layout = ({ children }) => {
    return (
        <div className="page-wrapper">
        <Navbar />
        <div id="wrap">{children}</div>
        <Footer />
    </div>
  )
}

export default Layout
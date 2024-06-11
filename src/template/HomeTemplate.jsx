import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const HomeTemplate = () => {
  return (
    <>
      <Header />
      <div className="content">
        <Outlet />
      </div>
      <Footer/>
    </>
  )
}

export default HomeTemplate
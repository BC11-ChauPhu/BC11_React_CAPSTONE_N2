import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const HomeTemplate = () => {
  return (
    <>
      <Header />
      <div className="content">
        <Outlet />
      </div>
    </>
  )
}

export default HomeTemplate
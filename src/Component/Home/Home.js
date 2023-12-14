import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Subnav from '../SubNavbar/Subnav'

function Home() {
  return <>
  <Navbar/>
  <Subnav/>
  <Outlet/>
  </>
}

export default Home
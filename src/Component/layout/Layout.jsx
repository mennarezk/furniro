import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'
import Section_Two from '../../sectionTwo/Section_Two'
import Section_Three from '../../Section_three/Section_Three'

export default function Layout() {
  return (
    <>
     <Navbar/>
     <Outlet/>
     <Footer/>
    </>
  )
}

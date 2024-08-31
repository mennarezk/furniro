import React, { useState } from 'react'
import Layout from './Component/layout/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Shop from './Shop/Shop'
import Home from './Home/Home'
import About from './About/About'
import Contact from './contact/Contact'
import Section_Two from './sectionTwo/Section_Two'
import Section_Three from './Section_three/Section_Three'
import Footer_Two from './Footer_Two/Footer_Two'
import Cart from './Cart/Cart'
// import Like from './Component/Navbar/Like'
import CheckOut from './Cart/CheckOut'
import Cover from './Cover/Cover'
import Login from './Cover/Login'
import Register from './Cover/Register'
// import Section_Images from '../Section_Images/Section_Images'


export default function App() {
    const Routing=createBrowserRouter([
                {
                  path: "/",element: <Cover />, 
                }, 
                {
                  path: "login",element: <Login />, 
                }, 
                {
                  path: "register",element: <Register />, 
                }, 
              {
                path:"",element:<Layout/>,
                children:[
                  {path:"/",element:<Cover/> },
                  {path:"home",element:<Home/> },
                  { path:"sectionTwo",element:<Section_Two/>},
                  { path:"sectionThree",element:<Section_Three/>},
            
                  { path:"about",element:<About/>},
                  { path:"shop",element:<Shop/>},
                  { path:"register",element:<Register/>},
                        
                  { path:"contact",element:<Contact/>},
                  { path:"footer_two",element:<Footer_Two/>},
                  { path:"cart",element:<Cart/>},
            //    { path:"like",element:<Like/>},
               { path:"checkout",element:<CheckOut/>},
            //    { path:"checkout",element:<Section_Images/>},
         
           
          
            ]
        }
    ])
  return <RouterProvider router={Routing}/>
 
}

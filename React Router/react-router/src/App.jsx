import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

import { createBrowserRouter, RouterProvider} from "react-router-dom";


function App() {
  const router = createBrowserRouter([
      {
        path: "/",
        element: <><Navbar/><Home/></>
      },
      {
        path: "/about",
        element: <><Navbar/><About/></>
      },
      {
        path: "/contact",
        element: <><Navbar/><Contact/></>
      },
  ])

  return (
    <>
<RouterProvider router={router} />
    </>
  )
}

export default App

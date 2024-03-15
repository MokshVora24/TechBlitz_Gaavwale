import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { useAuthContext } from '../src/context/AuthContext'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../src/pages/Home.jsx'

function App() {
  const authUser = useAuthContext()

  return (
    <>
      <div className='p-4 h-screen flex items-center justify-center'>

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        {/* <Toaster /> */}
      </div>
    </>
  )
}

export default App

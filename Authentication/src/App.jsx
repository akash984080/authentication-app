import React from 'react'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { BrowserRouter, Route, Routes } from 'react-router'
import Forgot from './pages/Forgot'
import { Homepage } from './pages/Home'

const App = () => {
  return (


    <div >




      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='forgot' element={<Forgot />} />
      </Routes>

    </div>


  )
}

export default App
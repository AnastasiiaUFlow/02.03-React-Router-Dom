import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Users from './pages/Users'
import UserProfile from './pages/UserProfile'
function App() {

  return (
    <>
    <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/users' element={<Users />}/>
        <Route path="/users/:userId" element={<UserProfile />} />

      </Routes>
    </>
  )
}

export default App

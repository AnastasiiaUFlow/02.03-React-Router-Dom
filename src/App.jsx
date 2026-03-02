import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Users from './pages/Users'
function App() {

  return (
    <>
    <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/users' element={<Users />}/>
        <Route path='/users:userId' element={<UsersProfile />}/>

      </Routes>
    </>
  )
}

export default App

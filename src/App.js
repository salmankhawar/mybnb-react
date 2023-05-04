import logo from './logo.svg'
import './App.css'
import House from './pages/House'
import HouseCreate from './pages/HouseCreate'
import Login from './pages/Login'
import Profile from './pages/Profile'
import SignUp from './pages/SignUp'
import Houses from './pages/Houses'
import EditHouse from './pages/EditHouse'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Houses />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edithouse" element={<EditHouse />} />
          <Route path="/house" element={<House />} />
          <Route path="/housecreate" element={<HouseCreate />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

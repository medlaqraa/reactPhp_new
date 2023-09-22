import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import Footer from './Components/Footer'
import UserLists from './Components/UserLists'

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}
export default App
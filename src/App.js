import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import UserLists from './Components/UserLists'

function App() {
  return (
    <div>
      <Header/>
      <Home/>
    </div>
  )
}
export default App
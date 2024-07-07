import React from 'react'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/fuckoff' element={<Details/>}/> */}
      </Routes>
    </BrowserRouter>
  )
}
export default App

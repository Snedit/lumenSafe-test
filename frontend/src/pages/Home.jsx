import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Welcome from '../components/Welcome'
import Footer from '../components/Footer'
import Services from '../components/Services'

const Home = () => {
    const [x, setX] = useState(false);
  return (
    <div>
      <div className="gradient-bg-welcome">
        <Navbar/>
        <Welcome setX={setX}/>
      </div>
      <Services x={x}/>
      <Footer/>
    </div>
  )
}

export default Home

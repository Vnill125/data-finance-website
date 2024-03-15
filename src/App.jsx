import React from 'react'
import { BrowserRouter } from "react-router-dom"

import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Analytics from './components/Analytics'
import Newsletter from './components/Newsletter'
import Cards from './components/Cards'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Hero/>
        <Analytics/>
        <Newsletter/>
        <Cards/>
      </BrowserRouter>
    </div>
  )
}

export default App

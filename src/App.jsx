import { useState } from 'react'
import './assets/css/App.css'
import Navbar from './assets/Components/Global/Navbar'
import Footer from './assets/Components/Global/Footer'
import Buscador from './assets/Components/Content/Buscador'

function App() {

  return (
    <>
      <Navbar/>
      <Buscador/>
      <Footer/>
    </>
  )
}

export default App

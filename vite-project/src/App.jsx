import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './Components/Footer'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import FanArt from './pages/FanArt'
import Originals from './pages/Originals'
import Portraits from './pages/Portraits'
import NavBar from './Components/NavBar'

function App() {

  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/originals' element={<Originals />}></Route>
          <Route path='/fanArt' element={<FanArt />}></Route>
          <Route path='/portraits' element={<Portraits />}></Route>
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App

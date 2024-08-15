import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Cta from './components/Cta'
import Nieuws from './components/Nieuws'
import Cta2 from './components/Cta2'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <Hero/>
      <Cta/>
      <Nieuws/>
      <Cta2/>
      <Footer/>
    </>
  )
}

export default App

import React from 'react'
import Apps from './Apps'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Screens/Home'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import About from './Screens/About'
const App = () => {
  return (

    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path="/" element={<Apps />} />
        <Route path="/about" element={<About />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    
    // <div>
    // <Apps />
    // </div>
  )
}

export default App

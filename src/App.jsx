import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'

function App() {
  
  const [count, setCount] = useState(0)

  return (
    <body className="bg-white text-black dark:bg-[#081014] dark:text-white transition-colors duration-300 cursor-custom dark:cursor-custom font-display">
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
        <Footer/>
    </Router>
    </body>
  )
}

export default App

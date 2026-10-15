import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Indexs from './indexs'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import Index from './indexs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
    
    <Route path="/home" element={<Indexs/>}/>
    <Route path="/" element={<Login/>}/>
    </Routes>
   </BrowserRouter>
    </>
  )
}

export default App

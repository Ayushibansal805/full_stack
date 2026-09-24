import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Hello from './Hello.jsx'
import Navbar from './Navbar.jsx'
import Body from './Body.jsx'
import Footer from './Footer.jsx'
import StudentCard from './StudentCard.jsx'
createRoot(document.getElementById('root')).render(

  <BrowserRouter>
  <StrictMode>
    <App />
    {/* <StudentCard name='Ayushi' course='btech' city='agra'/>
    <Hello />
    <Navbar />
    <Body />
    <Footer /> */}
  </StrictMode>,
  </BrowserRouter>

)

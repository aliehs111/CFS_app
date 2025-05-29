// src/App.jsx
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Qualifications from './pages/Qualifications'
import Contact from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      {/* Navbar on every page */}
      <Navbar />

      {/* Page-specific content */}
      <main className="pt-20"> {/* adjust top padding to avoid overlap */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/qualifications" element={<Qualifications />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}



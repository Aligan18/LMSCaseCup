import React, { Suspense } from 'react'
import { Link, Route, Router, Routes } from 'react-router-dom'
import { AboutPageAsync } from '../pages/AboutPage/AboutPage.async'
import { HomePageAsync } from '../pages/HomePage/HomePage.async'
import './index.scss'

const App = () => {
  return (
    <div className="app"> 
          <Link to={'/'}>Home page </Link>
          <Link to={'/about'}>About page </Link>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<HomePageAsync/>}/>
                <Route path="/about" element={<AboutPageAsync/>}/>
            </Routes>
          </Suspense>
    </div>
  )
}

export default App
import React, { Suspense, useState } from 'react'
import { Link, Route, Router, Routes } from 'react-router-dom'
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async'
import { HomePageAsync } from './pages/HomePage/HomePage.async'
import './styles/index.scss'

enum ETheme {
  DARK = 'dark',
  LIGHT = 'light'
}

const App = () => {
  const [theme , setTheme ] = useState<ETheme>(ETheme.LIGHT)

  const handleTheme =()=>{
    const changedTheme = theme === ETheme.DARK ? ETheme.LIGHT : ETheme.DARK
    console.log(changedTheme)
    setTheme(changedTheme)
  }
  
  return (
    <div className={`app ${theme}`}>  
          <button onClick={handleTheme}>Theme</button>
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
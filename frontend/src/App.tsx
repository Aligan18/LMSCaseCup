import React, { Suspense, useContext, useState } from 'react'
import { Link, Route, Router, Routes } from 'react-router-dom'
import { ETheme, ThemeContext } from './context/ThemeContext'
import { classnames } from './helpers/classnames'
import { useTheme } from './hooks/useTheme'
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async'
import { HomePageAsync } from './pages/HomePage/HomePage.async'
import './styles/index.scss'


const App = () => {
  const  {changeTheme ,theme} = useTheme() 
  console.log(classnames("wrapper", {hovered : true, checked : true, red: false}, ['pdg','hello']))
  return (
    <div className={`app ${theme}`}>  
          <button onClick={changeTheme}>Theme</button>
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
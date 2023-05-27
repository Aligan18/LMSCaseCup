
import  { Suspense } from 'react'
import { Link, Route,  Routes } from 'react-router-dom'
import { AboutPage } from 'pages/AboutPage'
import { HomePage } from 'pages/HomePage'
import { classnames } from 'shared/lib'
import { useTheme } from './providers/ThemeProvider'
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
                <Route path="/" element={<AboutPage/>}/>
                <Route path="/about" element={<HomePage/>}/>
            </Routes>
          </Suspense>
    </div>
  )
}

export default App
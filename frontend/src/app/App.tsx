

import { Link} from 'react-router-dom'
import { classnames } from 'shared/lib'
import { AppRouters } from './providers/AppRouters'
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
          <AppRouters/>
    </div>
  )
}

export default App
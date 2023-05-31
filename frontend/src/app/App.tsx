

import { Link} from 'react-router-dom'
import { classnames } from 'shared/lib'
import { Navbar } from 'widgets/ui'
import { AppRouters } from './providers/AppRouters'
import { useTheme } from './providers/ThemeProvider'
import './styles/index.scss'




const App = () => {
  const  {theme} = useTheme() 
  return (
    <div className={`app ${theme}`}>  
          <Navbar/>
          <AppRouters/>
    </div>
  )
}

export default App
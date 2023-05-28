import { AboutPage } from "pages/AboutPage"
import { HomePage } from "pages/HomePage"
import { RouteProps } from "react-router-dom"





export const RoutePath  =  {
     about : '/about',
     home : '/'

} 

export const RouteConfig : Array<RouteProps> = [
    {
        path: RoutePath.about,
         element: <AboutPage/>
     
    },
    {
        path: RoutePath.home ,
        element: <HomePage/>
            
    } 
    
]


      


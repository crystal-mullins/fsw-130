import React from "react"
import ThemeContext from './themeContext'
import {UserContextConsumer} from "./userContext"

function Main(props){

        return (
          
        <UserContextConsumer>
                 {({username}) => {
                  
                     return ( 
                     <div>
                        <p>Welcome, {username}!</p>
                     
                     <p className="main">No new notifications, {username} 🎉</p>
                     </div>
                    
                 )}}
                
             </UserContextConsumer>
        )    
}


export default Main
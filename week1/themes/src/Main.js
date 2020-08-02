import React from "react"
import ThemeContext from './themeContext'
import UserContext from "./userContext"

function Main(props){

        return (
          
        <UserContext.Consumer>
                 {username => (
                     <div>
                        <p>Welcome, {username}!</p>
                     
                     <p className="main">No new notifications, {username} 🎉</p>
                     </div>
                    
                 )}
                
             </UserContext.Consumer>
        )    
}


export default Main
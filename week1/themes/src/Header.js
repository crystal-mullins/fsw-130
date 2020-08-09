import React from "react"
import {ThemeContextConsumer} from './themeContext'
import {UserContextConsumer} from "./userContext"

function Header() {
        return (
            // <ThemeContextConsumer>
            //     {theme => (
            //          <header className={`${theme}-theme`}>
            //          <h2>{theme === "light" ? "Light" : "Dark"} Theme</h2>
            //     </header>


            //     )}
            // </ThemeContextConsumer> 
            <header>
                <UserContextConsumer>
                    {({username}) => (
                        <p>Welcome, {username}!</p>
                    )}
                </UserContextConsumer>
            </header>
       

        )    
}

export default Header

















import React from "react"
import ThemeContext from './themeContext'

function Footer(props){

        return (
            <ThemeContext.Consumer>
             
              {theme => (
                     
                     <header className={`${theme}-theme`}>
                     <h2>{theme === "light" ? "light" : "Dark"} New Display</h2>
                    </header>

                )}
            </ThemeContext.Consumer>
        )    
}


export default Footer
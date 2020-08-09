import React from "react"
import {ThemeContextConsumer} from './themeContext'

function Footer(props){

        return (
            <ThemeContextConsumer>
             
              {theme => (
                     
                     <header className={`${theme}-theme`}>
                     <h2>{theme === "light" ? "light" : "Dark"} Footer</h2>
                    </header>

                )}
            </ThemeContextConsumer>
        )    
}


export default Footer
import React from "react"
import ReactDOM from "react-dom"
import Apptwo from "./Apptwo"
import App from "./App"
import {ThemeContextProvider} from "./themeContext"
import {UserContextProvider} from "./userContext"


ReactDOM.render(

  <UserContextProvider >
    <ThemeContextProvider >
        <App />
    </ThemeContextProvider>

  </UserContextProvider>,
       
    
    
    document.getElementById("root")
)

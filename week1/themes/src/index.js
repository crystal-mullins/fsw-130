import React from "react"
import ReactDOM from "react-dom"

import App from "./App"
// import ThemeContext from "./themeContext"

const ThemeContext = React.createContext()

ReactDOM.render(
    <ThemeContext.Provider value={"light"}>
        <App />
    </ThemeContext.Provider>, 
    document.getElementById("root")
)

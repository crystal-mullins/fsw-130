import React from "react"
import Header from "./Header"
import Button from "./Button"
import './styles.css'
import ThemeContext from "./themeContext"
import UserContext from "./userContext"
import Main from "./Main"
import Footer from "./Footer"
// import UserContext from "./userContext"

function App() {
    return (
        <div>
            <Header />
            <Main />
            <ThemeContext.Consumer>
             
              {theme => (
                <div>
                  <Button theme={theme} />
                  <Footer />
                 </div>
                   )}
                  

                   

              </ThemeContext.Consumer>
 
           
        </div>
    )
}

export default App






import React, {Component} from "react"

class Header extends Component {
    render() {
        return (
            <header className="light-theme">
                <h2>Light Theme</h2>
            </header>
        )    
    }
}

export default Header














// import React, {Component} from "react"
// import ThemeContext from "./themeContext"

// function Header(props) {
//     return (
//         <ThemeContext.Consumer>
//             {theme => (
//                 <header className={`${theme}-theme`}>
//                     <h2>{theme === "light" ? "Light" : "Dark"} Theme</h2>
//                 </header>
//             )}
//         </ThemeContext.Consumer>
//     )    
// }

// export default Header

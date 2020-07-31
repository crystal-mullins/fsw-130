

import React, {Component} from "react"
import ThemeContext from "./themeContext"

class Button extends Component {
    render() {
        return (
            <button className="light-theme">Switch Theme</button>
        )    
    }
}

export default Button


// import React from "react"
// import PropTypes from "prop-types"
// import ThemeContext from "./themeContext"

// function Button(props) {
//     console.log("btn page") 
//     return (
//                  <button className={`${props.theme}-theme`}>Switch Theme</button> 
//     )}
   

// Button.propTypes = {
//     theme: PropTypes.oneOf(["light", "dark"])
// }

// Button.defaultProps = {
//     theme: "dark"
// }

// export default Button
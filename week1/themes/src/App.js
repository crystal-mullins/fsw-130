import React from "react"

import React from "react"

import Header from "./Header"
import Button from "./Button"

function App() {
    return (
        <div>
            <Header />
            <Button />
        </div>
    )
}

export default App





// import Header from "./Header"
// import Button from "./Button"
// import ThemeContext from "./themeContext"

// function App() {
//     return (
//         <div>
//             <Header />
//             <ThemeContext.Consumer>
//                 {theme => (
//                     <Button theme={theme} />
//                 )}
//             </ThemeContext.Consumer>
            
//             <Button theme="dark"/>
//         </div>
//     )
// }

// export default App
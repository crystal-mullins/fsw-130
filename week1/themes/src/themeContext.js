import React, {Component} from "react"
const{Provider, Consumer} = React.createContext()

class ThemeContextProvider extends Component {
   state = {
            theme: 'dark',
           
   }
   toggleTheme = () => {
       this.setState(prevState => {
           return {
               theme: prevState.theme === "light" ? "dark" : "light"
           }
       })
   }
     


    render() {
        return (
            <Provider value={this.state.theme}
           
            >
            {this.props.children}
            <button onClick={this.toggleTheme}>Change
            </button>
           
            </Provider>
           
          
         )
    }
}

export {ThemeContextProvider, Consumer as ThemeContextConsumer}
import React from "react"


const {Provider, Consumer} = React.createContext()

class UserContextProvider extends React.Component {
    state = {
        username: "Your name",
        productName:"",
        newProductrName:"",
        productDescription:"",
        companyName:"Company/ Farm name",
        newCompanyName:""
    }
    changeUserName = (username) => {
        this.setState({username})
       
    }
    changeCompanyName = (companyName) => {
        console.log(companyName)
        this.setState({companyName})
       
    }
    changeProductDescription = (productDescription) => {
         this.setState({productDescription})
       
    }
    render(){
        const {username} = this.state
        const {companyName} = this.state
        const {productDescription} = this.state
       return(
           <Provider value={{username,changeUserName: this.changeUserName,
           companyName, changeCompanyName: this.changeCompanyName, productDescription, changeProductDescription: this.changeProductDescription}
           }>
        {this.props.children}
    </Provider>

       ) 
    }
}
export {UserContextProvider, Consumer as UserContextConsumer}



// handleSubmit = (e) =>{
    //     e.preventDefault()
    
    //    let newItem ={
    //         company:this.state.company,
    //         // name:this.state.name,
    //         // price:this.state.price, 
    //         // description:this.state.description,
    //         // img:this.state.img,
    //         // editing:false   
    //      }
       
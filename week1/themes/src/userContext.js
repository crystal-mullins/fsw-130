import React from "react"


const {Provider, Consumer} = React.createContext()

class UserContextProvider extends React.Component {
    state = {
        username: "Your name",
        productName:"",
        productDescription:"",
        companyName:"Company/ Farm name",
       
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
    handleSubmit = (newItem) =>{
    
        this.setState( {
            companyName:newItem.companyName,
            productName:newItem.productName,
            productPrice:newItem.productPrice, 
            productDescription:newItem.productDescription,
            img:newItem.img,
            // editing:false   
         })
        
    }
    render(){
        const {username, productName, productPrice, img,
            companyName,  productDescription,} = this.state
        // const {companyName} = this.state
        // const {productDescription} = this.state
       return(
           <Provider value={{username, productName, productPrice, img,
           companyName,  productDescription,  handleSubmit : this.handleSubmit}
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
       
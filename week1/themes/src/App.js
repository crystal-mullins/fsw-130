import React from "react"
import Header from "./Header"
import Button from "./Button"
import './styles.css'
import {ThemeContextConsumer} from "./themeContext"
import UserContext from "./userContext"
import Main from "./Main"
import Footer from "./Footer"
import Form from "./Form"
import Card from './Card'
import {UserContextConsumer} from "./userContext"
// import UserContext from "./userContext"

class App extends React.Component {
  state = {
    newCompanyName:"",
    newProductName:"",
    img:"",
    name: '',
    price:'',
    newProductDescription:
'',
    description:'',
    itemCard:[],
    handleDelete: this.handleDelete,
    handleEdit: this.handleEdit
}


handleChange = (e) => {
  const {name, value} = e.target
  this.setState({ [name] : value})
  }

 


render() {
  // let newPost = {
  // newUsername = {newUsername},
  // newCompanyName = {newCompanyName}
  // }

   return (
        <div>
            <Header />
            <Main />
            <Button />
            <Footer />
           
            <Card />
            <UserContextConsumer>
            {({companyName,  productName, productDescription,  productPrice, img, handleSubmit}) => (
              <form className="wrapper" onSubmit={(e)=> {
                // handleSubmit = (e) =>{
      
                  e.preventDefault()
                  let newCardData= {
                      companyName: this.state.companyName,
                      productName: this.state.productName,
                      productPrice: this.state.productPrice,  
                      productDescription: this.state.productDescription,
                      img: this.state.img
                  }
                      handleSubmit(newCardData)
              // }
              

              }}>
                            <main>
                            <input
                            type="text"                            name="companyName"
                            placeholder="Enter Company Name"
                            value={this.state.companyName}
                            onChange={this.handleChange}
                          
                            />
                        <input
                            type="text"
                            name="productName"
                            placeholder="Enter Product Name"
                            value={this.state.productName}
                            onChange={this.handleChange}
                          
                            />
                             <input
                            type="text"
                            name="productDescription"
                            placeholder="Enter Product Description"
                            value={this.state.productDescription}
                            onChange={this.handleChange}
                            // onChange={(e) => handleSubmit(e.target.value)}
                          
                            />
                             <input
                            type="number"
                            name="productPrice"
                            placeholder="Enter Product price"
                            value={productPrice}
                            onChange={this.handleChange}
                          
                            />
                             <input
                            type="img"
                            name="img"
                            placeholder="Enter Product img ulr"
                            value={this.state.img}
                            onChange={this.handleChange}
                          
                            />
                            <button style={{gridColumn:"span 2", width:"50%", marginLeft:"25%"}}>On Submit</button>
                            </main>
                            </form>
            )}
            </UserContextConsumer>
           

         </div>
    )
            }
}

export default App






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
   
    name: '',
    price:'',
    newProductDescription:
'',
    description:'',
    itemCard:[],
    handleDelete: this.handleDelete,
    handleEdit: this.handleEdit
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
            {({newCompanyName, changeUserName, newProductName, changeCompanyName, productDescription, changeProductDescription, changeProductName}) => (
                            <main>
                            <input
                            type="text"
                            name="newCompanyName"
                            placeholder="Enter Company Name"
                            value={newCompanyName}
                            onChange={(e) => changeUserName(e.target.value)}
                          
                            />
                        <input
                            type="text"
                            name="newProductName"
                            placeholder="Enter Product Name"
                            value={newProductName}
                            onChange={(e) => changeCompanyName(e.target.value)}
                          
                            />
                             <input
                            type="text"
                            name="newProductDescription"
                            placeholder="Enter Product Description"
                            value={productDescription}
                            onChange={(e) => changeProductDescription(e.target.value)}
                          
                            />
                            <button style={{gridColumn:"span 2", width:"50%", marginLeft:"25%"}}>On Submit</button>
                            </main>
            )}
            </UserContextConsumer>
           

         </div>
    )
            }
}

export default App






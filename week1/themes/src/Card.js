import React , {Component}from 'react'
import items from './ListData'
import {UserContextConsumer} from "./userContext"

class Card extends Component{
    constructor(props){
        super(props)
        var { index, company, productName, price, description, img,  id } =this.props
        this.state= {
            index, company, productName, price, description, img, id, editing: false
        }
    }
    handleSubmit = (newItem) =>{
    
        this.setState( {
            newCompanyName:newItem.newCompanyName,
            newProductName:newItem.newProductName,
            price:newItem.price, 
            newProductDescription:newItem.newProductDescription,
            img:newItem.img,
            // editing:false   
         })
         this.props.handleSubmit(newItem)
    }
    
    render(){
    return(
        <div> 
            <h1 className='card-banner'>Today's Special's</h1>
            <UserContextConsumer>
            {({companyName, newProductName, newProductDescription, price, img}) => (
        <div className="card-wrapper">

                <div className='card'>
               <p>Company :
                   {companyName}</p>
                <p>Product name :
                    {newProductName}</p>
                <p>Product Description: 
                    {newProductDescription}</p>
                <p>price 
                    {price}</p>
                <p>Picture 
                    {img}</p>
                </div>
               
          

         
               
            
       
               {(this.state.editing? <Card
               id={this.state.id} 
               index={this.state.index}
               handleSubmit={this.handleSubmit}
               />: <p></p>)}
             
            
        </div>
             )}
             </UserContextConsumer>
            
 
        
        </div>
    )
    }
}



export default Card;
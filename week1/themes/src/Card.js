import React , {Component}from 'react'
import items from './ListData'
import {UserContextConsumer} from "./userContext"

class Card extends Component{
    constructor(props){
        super(props)
        var { index, companyName, productName, price, description, img,  id } =this.props
        this.state= {
            index, companyName, productName, price, description, img, id, editing: false
        }
    }

    
    render(){
    return(
        <div> 
            <h1 className='card-banner'>Today's Special's</h1>
            <UserContextConsumer>
            {({companyName,  productName, productDescription,  productPrice, img}) => (
        <div className="card-wrapper">

                <div className='card'>
               <p>Company :
                   {companyName}</p>
                <p>Product name :
                    {productName}</p>
                <p>Product Description: 
                    {productDescription}</p>
                <p>price 
                    {productPrice}</p>
                <img src={img}> 
                    </img>
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
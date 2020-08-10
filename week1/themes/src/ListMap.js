import React, {Component} from 'react'
import Card from './Card'
import items from './ListData'


class ListMap extends Component {
    render(){
        
        
        const mappedCards = this.props.items.map( (items, i) => {
            return(
                <Card
                key={i}
                index={i}
                Company={items.companyName}
                productName={items.productName}
                price={items.price}
                productDescription={items.productDescription}
                img={items.image}

                handleDelete={this.props.handleDelete}
                
                handleEdit={this.props.handleEdit}
                id={items._id}
                
                />
            )
        })
        return(
                <div>
                    
                    {mappedCards}
            </div>
        )
    }
}

export default ListMap
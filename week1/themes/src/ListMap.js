import React, {Component} from 'react'
import Card from './Card'
import items from './ListData'

class ListMap extends Component {
    render(){
        
        
        const mappedCards = this.props.items.map( (card, i) => {
            return(
                <Card
                key={i}
                index={i}
                Company={items.Company}
                name={items.name}
                price={items.price}
                description={items.description}
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
import React from 'react'
import { connect } from 'react-redux'

class PizzaList extends React.Component {

    // TODO:
    // Event Listener X
    // Event handler X
    // "Preload" event handler with the right data X
    // dispatch action 

    handleClick = (id) => {
        console.log('id nao?', id);
        this.props.dispatch({
            type: "DIS_PIZZA",
            payload: id
        })
    }

    render(){
        // console.log('PIZZALIST PROPS:', this.props)
        return <div>
            { this.props.pizzas.map(pizza => {
                return <div onClick={() => this.handleClick(pizza.id)} key={pizza.id}>
                    {this.props.selectedPizza == pizza.id ? <h1>{pizza.name}</h1> : <h4>{pizza.name}</h4>}
                    <p>{pizza.description}</p>
                </div>
            })}
        </div>
    }
}

const mapStateToProps = (state) => {
    // console.log('STATE OF THE REDUX STORE:', state)
    return {
        pizzas: state.pizzas,
        selectedPizza: state.selectedPizza
    }
}

export default connect(mapStateToProps)(PizzaList)





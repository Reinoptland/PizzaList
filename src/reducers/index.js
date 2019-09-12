import { combineReducers } from 'redux'
import pizzas from './pizzas'
import selectedPizza from './selectedPizza'

export default combineReducers({
    pizzas,
    selectedPizza,
})
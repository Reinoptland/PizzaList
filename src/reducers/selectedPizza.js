const selectedPizza = (state = 5, action = {}) => {
    switch (action.type) {
        case "DIS_PIZZA":
            return action.payload            
    
        default:
            return state
    }
}

export default selectedPizza

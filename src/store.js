// TODO:
// 1. Make a reducer X
// 2. Give it an initial state with pizzas X
// 3. Create a store using the reducer ()

import reducer from './reducers'
import { createStore } from 'redux'

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(reducer, enhancer)

export default store

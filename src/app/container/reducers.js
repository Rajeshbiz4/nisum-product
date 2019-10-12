import { combineReducers } from 'redux'
import { productReducer } from './Dashboard/logic' 

const rootReducer = combineReducers({
  products: productReducer
})

export default rootReducer

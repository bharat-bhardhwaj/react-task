import { createStore, combineReducers, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {loginReducer} from './reducer/LoginReducer';
import {registerReducer} from './reducer/RegisterReducer';
import {DetailsReducer} from './reducer/getdetails'

const reducer = combineReducers({
    loginReducer:loginReducer,
    registerReducer:registerReducer,
    DetailsReducer:DetailsReducer

})

const initialState ={};

const middleware = [thunk]
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
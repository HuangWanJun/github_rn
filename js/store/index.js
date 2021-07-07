import {applyMiddleware,createStore} from "redux";
import thunk from "redux-thunk";
import reducers from '../reducer'

const middleware=[ thunk ];

/**
 * 3. create store
 */
export default createStore(reducers,applyMiddleware(...middleware));

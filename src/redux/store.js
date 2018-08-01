import { createStore, applyMiddleware } from 'redux'
import allReducers from './allReducers';
import ReduxThunk from 'redux-thunk';


// Navigation
let middleware = [ReduxThunk]

const store = createStore(allReducers, {}, applyMiddleware(...middleware)); //add a second param here to hydrate the redux state, maybe from firebase?

export default store;
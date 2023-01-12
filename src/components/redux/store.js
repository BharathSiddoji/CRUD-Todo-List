import {createStore,combineReducers} from 'redux'
import {todoReducer} from './reducer/reducer';

const combinedReducer = combineReducers({todoReducer})

export const store = createStore(combinedReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
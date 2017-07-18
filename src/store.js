import { createStore, combineReducers } from 'redux';
import reducers from './reducers';

export default createStore(combineReducers(reducers),
/* preloadedState, */
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

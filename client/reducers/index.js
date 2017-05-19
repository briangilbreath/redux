/**
* Root Reducer
*/
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';


import posts from './posts';
import comments from './comments';

//combine all reducers, as well as include routerReducer
const rootReducer = combineReducers({posts, comments, routing: routerReducer});


export default rootReducer;

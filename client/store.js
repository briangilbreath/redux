//Think of a store as an empty database (empty object that contains everything);

import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//import the root reducer
import rootReducer from './reducers/index';

//import fake data
import comments from './data/comments';
import posts from './data/posts';

//create an object for the default data;
const defaultState = {
  posts: posts, //when posts are updated, we run the posts reducer
  comments: comments //when comments are updated, we run the comments reducer
}

//create store, takes root reducer (how we interface with it, and default state)
const store = createStore(rootReducer, defaultState);


//sync history with redux store
export const history = syncHistoryWithStore(browserHistory, store);


//export whole store
export default store;

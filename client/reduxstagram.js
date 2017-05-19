// let's go!
import React from 'react';
import {render} from 'react-dom';
//import CSS
import css from './styles/style.styl';

//import components
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

//import react router deps
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

//get redux bindings for react
import {Provider} from 'react-redux';

//import store
import store, {history} from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Main}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'))

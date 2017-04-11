import React from 'react';
import ReactDOM from 'react-dom';
import { Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducers/index';
// Components
import App from './App';
import Test from './Components/Test';
// extras
import './index.css';

const history = createHistory();
const middleware = routerMiddleware(history);

// creating the store
const defaultState = {
  testReducer: [],
};

const store = createStore(
       rootReducer,
       defaultState,
       compose(
          applyMiddleware(thunk, middleware),
          window.__REDUX_DEVTOOLS_EXTENSION__
          && window.__REDUX_DEVTOOLS_EXTENSION__(),
       ),
);

const router = (
  <Provider store={store}>
    <ConnectedRouter history={ history } >
      <Route path="/" component={App} />
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(
  router,
  document.getElementById('root'),
);

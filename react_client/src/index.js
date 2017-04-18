import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import rootReducer from './Reducers/index';
// Components
import App from './App';
import Test from './Components/Test';
import Home from './Components/Home';
import LoginPage from './Components/Login/LoginPage';
import Footer from './Components/Common/Footer';
// extras


const history = createHistory();
const middleware = routerMiddleware(history);

// creating the store
const defaultState = {
  testReducer: [],
  loginReducer: [],
  sessionReducer: { isLoggedIn: true },
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
    <ConnectedRouter history={history} >
      <App>
        <Redirect from="/" to="/login" />
        <Route path="/test" component={Test} />
        <Route path="/home" component={Home} />
        <Route path="/login" component={LoginPage} />
        <Footer />
      </App>
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(
  router,
  document.getElementById('root'),
);

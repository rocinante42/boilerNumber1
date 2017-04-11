import { combineReducers } from 'redux';
import { routerReducer} from 'react-router-redux';
// Here you can import all your reducers
import testReducer from './testReducer';

const rootReducer = combineReducers({ testReducer, router: routerReducer });

export default rootReducer;

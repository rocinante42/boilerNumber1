import { combineReducers } from 'redux';
import { routerReducer} from 'react-router-redux';
// Here you can import all your reducers
import testReducer from './testReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({ testReducer, loginReducer, router: routerReducer });

export default rootReducer;

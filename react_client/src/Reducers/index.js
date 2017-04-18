import { combineReducers } from 'redux';
import { routerReducer} from 'react-router-redux';
// Here you can import all your reducers
import testReducer from './testReducer';
import loginReducer from './loginReducer';
import sessionReducer from './sessionReducer';
import ironViewerReducer from './ironViewerReducer';

const rootReducer = combineReducers({ testReducer, loginReducer, sessionReducer, ironViewerReducer, router: routerReducer });

export default rootReducer;

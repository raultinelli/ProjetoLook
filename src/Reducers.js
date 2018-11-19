import { combineReducers } from 'redux';
import AuthReducer from './reducers/AuthReducer';
import GruposReducer from './reducers/GruposReducer';

const Reducers = combineReducers({
	auth:AuthReducer,
	grupos:GruposReducer
});

export default Reducers;
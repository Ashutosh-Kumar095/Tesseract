import counter from './counter';
import test from './test';
import {combineReducers} from 'redux';

const allReducer=combineReducers({
    counter,test
});

export default allReducer;

import { createStore, combineReducers } from 'redux';
import counterReducer from './reducer/counter';
import arrayReducer from './reducer/array';

const root = combineReducers({
    counter: counterReducer,
    arrayReducer: arrayReducer,
});

const store = createStore(root);

export default store;
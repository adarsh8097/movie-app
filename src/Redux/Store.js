import {createStore, applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from './AuthReducer/Authreducer';
import { movieReducer } from './MovieReducer/moviereducer';
const rootReducer = combineReducers({
   auth:authReducer,
   movies: movieReducer,

});

const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;


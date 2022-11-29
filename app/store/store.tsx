import appReducers from '../reducers';
import thunk from 'redux-thunk';
import {legacy_createStore as createStore, applyMiddleware} from 'redux';


export default function configureStore() {
    let store = createStore(appReducers, applyMiddleware(thunk));
    return store;
  }
  
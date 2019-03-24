import { createStore, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/index';
import logger from 'redux-logger';

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk,logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
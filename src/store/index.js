import { createStore, applyMiddleware,compose } from 'redux';
import reducer from './reducers/index';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {moviesSaga} from './sagas/index';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  compose(
    applyMiddleware(sagaMiddleware,logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
sagaMiddleware.run(moviesSaga);

export default store;
import { createStore, applyMiddleware  } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import appReducer from './reducers';
import { saga } from './sagas';

const sagaMonitor = require('@redux-saga/simple-saga-monitor');


export function configureStore() {

  const sagaMiddleWare = createSagaMiddleWare({ sagaMonitor });

  const store = createStore(
    appReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleWare))
  )

  sagaMiddleWare.run(saga);

  return store;
}



import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '~/domain/reducers';
import createSagaMiddleware from 'redux-saga';
import rootSagas from '~/domain/sagas/';

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSagas);

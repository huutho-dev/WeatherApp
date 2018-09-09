import { fork, all } from 'redux-saga/effects';
import weather from '~/domain/sagas/main/index';

/* eslint-disable */
const rootSaga = function*() {
  yield all([...weather.map(watcher => fork(watcher))]);
};

export default rootSaga;

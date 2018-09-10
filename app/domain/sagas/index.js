import { fork, all } from 'redux-saga/effects';
import weather from '~/domain/sagas/main/index';
import city from '~/domain/sagas/addcity/index';

/* eslint-disable */
const rootSaga = function*() {
  yield all([...weather.map(watcher => fork(watcher)), ...city.map(watcher => fork(watcher))]);
};

export default rootSaga;

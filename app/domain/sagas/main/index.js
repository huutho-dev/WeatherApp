import { takeLatest, all } from 'redux-saga/effects';
import types from '~/domain/types/index';
import getDataWeather from '~/domain/sagas/main/getWeather';

export default [
  function* watcher() {
    yield all([takeLatest(types.mainTypes.GET_DATA_WEATHER, getDataWeather)]);
  },
];

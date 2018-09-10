import { takeLatest, all } from 'redux-saga/effects';
import requestListCity from '~/domain/sagas/addcity/getListCity/index';
import types from '~/domain/types/index';

export default [
  function* watcher() {
    yield all([takeLatest(types.addCityTypes.GET_DATA_CITY), requestListCity]);
  },
];

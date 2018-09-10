import { put, call } from 'redux-saga/effects';
import { create } from 'apisauce';

import { dataQueryAutoComplete } from '~/domain/actions/addCity/index';

const API_KEY = 'apikey=meNt1gsw37UhR39s8kxP5ofktTGC8QRM';
const api = create({
  baseURL: 'http://dataservice.accuweather.com/',
  headers: { Accept: 'application/json' },
});

function convetQueryResultToItem(item) {
  return {
    key: item.Key,
    name: item.LocalizedName,
    type: item.Type,
    rank: item.Rank,
    country: {
      id: item.Country.ID,
      name: item.Country.LocalizedName,
    },
  };
}

function* queryCity(q) {
  try {
    const response = yield call(
      api.get,
      `/locations/v1/cities/autocomplete?${API_KEY}&language=vi-vn&q=${q}`,
    );
    if (response && response.status === 200) {
      const data = response.data[0];
      return data.map(item => convetQueryResultToItem(item));
    }
  } catch (error) {
    console.log(error);
  }
  return null;
}

export default function* (action) {
  const q = action.query;
  const listCity = yield call(queryCity, q);
  yield put(dataQueryAutoComplete(listCity));
}

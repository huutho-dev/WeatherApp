import types from '~/domain/types/index';

export const getListCityAutoComplete = (query) => {
  console.log(`action = GET_DATA_CITY && query = ${query}`);
  return {
    type: types.addCityTypes.GET_DATA_CITY,
    query,
  };
};

export const dataQueryAutoComplete = (data) => {
  console.log(`action = GET_DATA_CITY_SUCCESS && data = ${JSON.stringify(data)}`);
  return {
    type: types.addCityTypes.GET_DATA_CITY_SUCCESS,
    data,
  };
};

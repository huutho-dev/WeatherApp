import types from '~/domain/types/index';

export const addCityReducer = (stateAddCity = {}, action) => {
  console.log(`addCityReducer ==> ${action.type}`);
  switch (action.type) {
    case types.addCityTypes.GET_DATA_CITY:
      return {
        ...stateAddCity,
        query: action.query, // quere is key in Json Obj, check Action.js
      };
    case types.addCityTypes.GET_DATA_CITY_SUCCESS:
      return {
        ...stateAddCity,
        data: action.data, // data is key in Json Obj, check Action.js
      };
    default:
      return stateAddCity;
  }
};

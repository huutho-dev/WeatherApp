import types from '~/domain/types/index';

export const getWeatherData = (cityId) => {
  console.log('action = GET_DATA_WEATHER');
  return {
    type: types.mainTypes.GET_DATA_WEATHER,
    cityId,
  };
};

export const getWeatherDataSuccess = (data) => {
  console.log(`action = GET_DATA_WEATHER_SUCCESS && data = ${JSON.stringify(data)}`);
  return {
    type: types.mainTypes.GET_DATA_WEATHER_SUCCESS,
    data,
  };
};

export const setLoading = (isLoading) => {
  console.log(`action = IS_LOADING && isLoading = ${isLoading}`);
  return {
    type: types.mainTypes.IS_LOADING,
    isLoading,
  };
};

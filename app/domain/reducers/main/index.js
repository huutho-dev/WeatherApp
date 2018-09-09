import types from '~/domain/types/index';

// make sure init stateMain
export const mainReducer = (stateMain = initMainState, action) => {
  console.log(`mainReducer ==> ${action.type}`);
  switch (action.type) {
    case types.mainTypes.GET_DATA_WEATHER:
      return {
        ...stateMain,
        cityId: action.cityId,
      };

    case types.mainTypes.GET_DATA_WEATHER_SUCCESS:
      return {
        ...stateMain,
        currentWeather: action.data.currentWeather,
        forecast5day: action.data.forecast5day,
        forecastByHours: action.data.forecastByHours,
      };

    case types.mainTypes.IS_LOADING:
      return {
        ...stateMain,
        isLoading: action.isLoading,
      };
    default:
      return stateMain;
  }
};

const initMainState = {
  isLoading: false,
  cityId: '1-353412_1_AL',
  currentWeather: {
    temp: {
      c: 32.1,
      f: 90,
    },
    icon: 6,
    text: 'Nhiều mây',
    tempMin: {
      c: 26,
      f: 79,
    },
    tempMax: {
      c: 32.1,
      f: 90,
    },
  },
  forecast5day: [
    {
      date: '2018-09-09T07:00:00+07:00',
      epochDate: 1536451200,
      icon: 7,
      text: 'Có mây',
      tempMin: 24.4,
      tempMax: 31,
    },
    {
      date: '2018-09-10T07:00:00+07:00',
      epochDate: 1536537600,
      icon: 6,
      text: 'Nhiều mây',
      tempMin: 24.9,
      tempMax: 32,
    },
    {
      date: '2018-09-11T07:00:00+07:00',
      epochDate: 1536624000,
      icon: 13,
      text: 'Nhiều mây, có mưa rào',
      tempMin: 25.4,
      tempMax: 32.2,
    },
    {
      date: '2018-09-12T07:00:00+07:00',
      epochDate: 1536710400,
      icon: 15,
      text: 'Mưa dông',
      tempMin: 25.3,
      tempMax: 32.2,
    },
    {
      date: '2018-09-13T07:00:00+07:00',
      epochDate: 1536796800,
      icon: 4,
      text: 'Mây từng đợt',
      tempMin: 25.3,
      tempMax: 32.5,
    },
  ],
  forecastByHours: [
    {
      date: '2018-09-13T07:00:00+07:00',
      epochDate: 1536796800,
      icon: 4,
      text: 'có mây mưa',
      temp: 25.3,
    },
  ],
};

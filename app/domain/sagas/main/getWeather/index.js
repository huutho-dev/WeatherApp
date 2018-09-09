import { put, call } from 'redux-saga/effects';
import { getWeatherDataSuccess, setLoading } from '~/domain/actions/main';
import { create } from 'apisauce';

const API_KEY = 'apikey=meNt1gsw37UhR39s8kxP5ofktTGC8QRM';
const api = create({
  baseURL: 'http://dataservice.accuweather.com/',
  headers: { Accept: 'application/json' },
});

function* getCurrentWeather(cityId) {
  try {
    const response = yield call(
      api.get,
      `/currentconditions/v1/${cityId}?${API_KEY}&language=vi-vn&&details=true`,
    );
    console.log(`ThoNH ==> res: ${JSON.stringify(response)}`);

    if (response && response.status === 200) {
      const result = response.data[0];
      return {
        temp: { c: result.Temperature.Metric.Value, f: result.Temperature.Imperial.Value },
        icon: result.WeatherIcon,
        text: result.WeatherText,
        tempMin: {
          c: result.TemperatureSummary.Past12HourRange.Minimum.Metric.Value,
          f: result.TemperatureSummary.Past12HourRange.Minimum.Imperial.Value,
        },
        tempMax: {
          c: result.TemperatureSummary.Past12HourRange.Maximum.Metric.Value,
          f: result.TemperatureSummary.Past12HourRange.Maximum.Imperial.Value,
        },
      };
    }
  } catch (error) {
    console.log(error);
  }
  return null;
}

function convertItemForecast5Day(item) {
  return {
    date: item.Date,
    epochDate: item.EpochDate,
    icon: item.Day.Icon,
    text: item.Day.IconPhrase,
    tempMin: item.Temperature.Minimum.Value,
    tempMax: item.Temperature.Maximum.Value,
  };
}

function* get5DayForecast(cityId) {
  try {
    const response = yield call(
      api.get,
      `forecasts/v1/daily/5day/${cityId}?${API_KEY}&language=vi-vn&&details=true&metric=true`,
    );

    if (response && response.status === 200) {
      const result = response.data;
      return result.DailyForecasts.map(item => convertItemForecast5Day(item));
    }
  } catch (error) {
    console.log(error);
  }
  return null;
}

function convertItemForecastHours(item) {
  console.log(`dmm: ${JSON.stringify(item)}`);
  return {
    date: item.DateTime,
    epochDate: item.EpochDate,
    icon: item.WeatherIcon,
    text: item.IconPhrase,
    temp: item.Temperature.Value,
  };
}

function* getForecastWeatherByHours(cityId) {
  try {
    const response = yield call(
      api.get,
      `/forecasts/v1/hourly/12hour/${cityId}?${API_KEY}&language=vi-vn&&details=true&metric=true`,
    );

    if (response && response.status === 200) {
      const result = response.data;
      return result.map(item => convertItemForecastHours(item));
    }
  } catch (error) {
    console.log(error);
  }
  return null;
}

export default function* (action) {
  console.log('asdasdadad');
  try {
    const cityId = yield action.cityId;
    const currentWeather = yield getCurrentWeather(cityId) || null;
    const forecast5day = yield get5DayForecast(cityId) || null;
    const forecastByHours = yield getForecastWeatherByHours(cityId) || null;

    yield put(getWeatherDataSuccess({ currentWeather, forecast5day, forecastByHours }));
  } catch (error) {
    console.log(error);
  }
  yield put(setLoading(false));
}

import { combineReducers } from 'redux';
import { mainReducer } from '~/domain/reducers/main';
import { addCityReducer } from '~/domain/reducers/addcity';

export const rootReducer = combineReducers({ mainReducer, addCityReducer });

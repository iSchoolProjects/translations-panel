import {combineReducers} from '@reduxjs/toolkit';
import {commonSlice} from './common.slice';
import {enumSlice} from './enum.slice';

export const rootReducer = combineReducers({
  common: commonSlice.reducer,
  enumCountries: enumSlice.reducer,
});

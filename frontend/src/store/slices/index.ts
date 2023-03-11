import {combineReducers} from '@reduxjs/toolkit';
import {commonSlice} from './common.slice';

export const rootReducer = combineReducers({
    common: commonSlice.reducer,
});

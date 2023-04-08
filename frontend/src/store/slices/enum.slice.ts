import {createSlice} from '@reduxjs/toolkit';

export interface ICountries {
  code: string;
  country: string;
}

const initialState: ICountries[] = [];

export const enumSlice = createSlice({
  name: 'enumCountries',
  initialState,
  reducers: {
    setCountries: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coins: [],
  counter: 0,
};

export const slice = createSlice({
  name: "coins",
  initialState,
  reducers: {
    setCoins: (state, action) => {
      state.coins = action.payload.coins;
    },
    increment: (state) => {
      state.counter += 1;
    },
  },
});

export const selectCoins = (state) => state.coins.coins;
export const selectCounter = (state) => state.coins.counter;

export const { setCoins, increment } = slice.actions;

export default slice.reducer;

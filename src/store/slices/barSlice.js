import { createSlice } from "@reduxjs/toolkit";
import { resetApp } from "../actions";

export const barSlice = createSlice({
  name: "bar",
  initialState: [...Array(6)].map(() => crypto.randomUUID()),
  reducers: {
    addDrink(state, action) {
      state.unshift(action.payload);
    },
    removeDrink(state, action) {
      const index = state.findIndex((item) => item.id === action.payload);
      state.splice(index, 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(resetApp, (state, action) => {
      return [...Array(6)].map(() => crypto.randomUUID());
    });
  },
});

export const barReducer = barSlice.reducer;
export const { addDrink } = barSlice.actions;

import { createSlice } from "@reduxjs/toolkit";

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
});

export const barReducer = barSlice.reducer;
export const { addDrink } = barSlice.actions;

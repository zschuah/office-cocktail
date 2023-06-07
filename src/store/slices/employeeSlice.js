import { createSlice } from "@reduxjs/toolkit";
import { generateEmployee } from "../../utils/staff";
import { resetApp } from "../actions";

const employeeSlice = createSlice({
  name: "employee",
  initialState: [...Array(2)].map(() => generateEmployee()),
  reducers: {
    addEmployee(state, action) {
      state.unshift(action.payload);
    },
    removeEmployee(state, action) {
      const index = state.findIndex((item) => item.id === action.payload);
      state.splice(index, 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(resetApp, (state, action) => {
      return [...Array(2)].map(() => generateEmployee());
    });
  },
});

export const employeeReducer = employeeSlice.reducer;
export const { addEmployee, removeEmployee } = employeeSlice.actions;

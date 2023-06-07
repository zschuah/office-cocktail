import { createSlice } from "@reduxjs/toolkit";
import { generateEmployee } from "../../utils/staff";

const employeeSlice = createSlice({
  name: "employee",
  initialState: [...Array(2)].map(() => generateEmployee()),
  reducers: {
    addEmployee(state, action) {
      state.unshift(generateEmployee());
    },
    removeEmployee(state, action) {
      const index = state.findIndex((item) => item.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const employeeReducer = employeeSlice.reducer;
export const { addEmployee, removeEmployee } = employeeSlice.actions;

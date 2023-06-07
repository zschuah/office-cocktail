import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { cocktailApi } from "./apis/cocktailApi";
import {
  addEmployee,
  employeeReducer,
  removeEmployee,
} from "./slices/employeeSlice";

export const store = configureStore({
  reducer: {
    employee: employeeReducer,
    [cocktailApi.reducerPath]: cocktailApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(cocktailApi.middleware);
  },
});

setupListeners(store.dispatch);

export { addEmployee, removeEmployee };
export const { useFetchCocktailQuery } = cocktailApi;

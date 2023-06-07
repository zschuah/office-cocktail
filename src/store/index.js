import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { cocktailApi } from "./apis/cocktailApi";
import {
  addEmployee,
  employeeReducer,
  removeEmployee,
} from "./slices/employeeSlice";
import { barReducer, addDrink } from "./slices/barSlice";

export const store = configureStore({
  reducer: {
    employee: employeeReducer,
    bar: barReducer,
    [cocktailApi.reducerPath]: cocktailApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(cocktailApi.middleware);
  },
});

setupListeners(store.dispatch);

export { addEmployee, removeEmployee, addDrink };
export const { useFetchCocktailQuery } = cocktailApi;

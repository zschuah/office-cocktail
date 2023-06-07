import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cocktailApi = createApi({
  reducerPath: "cocktail",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.thecocktaildb.com/api/json/v1/1",
  }),
  endpoints(builder) {
    return {
      fetchCocktail: builder.query({
        query: (employee) => {
          return {
            url: "/random.php",
            params: {
              v: employee.id,
            },
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useFetchCocktailQuery } = cocktailApi;
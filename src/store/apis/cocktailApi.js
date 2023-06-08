import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cocktailApi = createApi({
  reducerPath: "cocktail",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.thecocktaildb.com/api/json/v1/1",
  }),
  endpoints(builder) {
    return {
      //https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
      fetchCocktailByName: builder.query({
        query: (name) => {
          return {
            url: "/search.php",
            params: {
              s: name,
            },
            method: "GET",
          };
        },
      }),
      //https://www.thecocktaildb.com/api/json/v1/1/random.php
      fetchCocktail: builder.query({
        query: (id) => {
          return {
            url: "/random.php",
            params: {
              v: id,
            },
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useFetchCocktailQuery, useFetchCocktailByNameQuery } =
  cocktailApi;

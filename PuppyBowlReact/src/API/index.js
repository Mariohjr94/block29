import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const puppyBowlApi = createApi({
  reducerPath: "puppyBowlApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/",
  }),

  endpoints: (builder) => ({
    getPlayers: builder.query({
      query: () => "players/", // Endpoint URL
    }),
  }),
});

export const { useGetPlayersQuery } = puppyBowlApi;
export default puppyBowlApi;

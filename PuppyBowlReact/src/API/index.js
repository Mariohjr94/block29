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
    deletePlayer: builder.mutation({
      query: (playerId) => ({
        url: `players/${playerId}/`,
        method: "DELETE",
      }),
    }),
    addPlayer: builder.mutation({
      query: (newPlayerData) => ({
        url: "players/",
        method: "POST",
        body: newPlayerData,
      }),
    }),
  }),
});

export const {
  useGetPlayersQuery,
  useDeletePlayerMutation,
  useAddPlayerMutation,
} = puppyBowlApi;
export default puppyBowlApi;

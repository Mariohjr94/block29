import { configureStore } from "@reduxjs/toolkit";
import puppyBowlApi from "../API/index";
import { setupListeners } from "@reduxjs/toolkit/query";

console.log(puppyBowlApi.middleware);
const store = configureStore({
  reducer: {
    [puppyBowlApi.reducerPath]: puppyBowlApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(puppyBowlApi.middleware),
});

setupListeners(store.dispatch);
export default store;

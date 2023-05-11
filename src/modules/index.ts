import { configureStore } from "@reduxjs/toolkit";
import { jobsList } from "./slices";

export * from "./query";

export const store = configureStore({
  reducer: {
    jobsList: jobsList.reducer,
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof store.getState>;

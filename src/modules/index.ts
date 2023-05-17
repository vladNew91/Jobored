import { configureStore } from "@reduxjs/toolkit";
import { jobsData } from "./slices";

export * from "./query";

export const store = configureStore({
  reducer: {
    jobs: jobsData.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

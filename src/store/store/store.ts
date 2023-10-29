import { configureStore } from "@reduxjs/toolkit";
import resumeSlice from "../actions/resume";

export const store = configureStore({
  reducer: {
    userValue: resumeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

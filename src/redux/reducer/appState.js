import { createSlice } from "@reduxjs/toolkit";

const appState = createSlice({
  name: "app",
  initialState: {
    lastLocationRoute: null,
    lastLocationRouteParams: {},
    previousRoute: null,
    appLoading: false,
  },
  reducers: {
    setLastLocation: (state, action) => {
      state.lastLocationRoute = action.payload;
    },
    setLastLocationRouteParams: (state, action) => {
      state.lastLocationRouteParams = action.payload;
    },
    setpreviousRoute: (state, action) => {
      state.previousRoute = action.payload;
    },
    setAppLoading: (state, action) => {
      state.appLoading = action.payload;
    }
  }
});

export const {
    setLastLocation,
    setLastLocationRouteParams,
    setpreviousRoute,
    setAppLoading
} = appState.actions;
export default appState.reducer;

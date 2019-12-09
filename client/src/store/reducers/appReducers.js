import { createSlice } from "@reduxjs/redux-toolkit";

export const appPages = {
  store: "store",
  library: "library",
  about: "about"
};

const initialState = { activePage: appPages.store };

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    SET_ACTIVE_PAGE: (state, action) => {
      state.activePage = action.payload;
    }
  }
});

export const { SET_ACTIVE_PAGE } = appSlice.actions;

const appReducer = appSlice.reducer;
export default appReducer;

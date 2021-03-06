import { configureStore, getDefaultMiddleware } from "@reduxjs/redux-toolkit";
import gamesReducer from "./reducers/gamesReducer";
import apiMiddleware from "./middlewares/apiMiddleware";
import appReducer from "./reducers/appReducers";

const defaultMiddlewars = getDefaultMiddleware({
  serializableCheck: false
});

const store = configureStore({
  middleware: [...defaultMiddlewars, apiMiddleware],
  reducer: {
    games: gamesReducer,
    app: appReducer
  }
});

export default store;

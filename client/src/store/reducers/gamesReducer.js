import { createSlice } from "@reduxjs/redux-toolkit";
import { apiAction, API_START, API_END } from "../middlewares/apiMiddleware";

export const gamesVisibilityFilters = {
  ALL: "all",
  ALL_NOT_IGNORED: "all but not ignored",
  WHITELISTED: "whitelist",
  IGONRED: "ignored"
};

const initialState = {
  items: [],
  loading: false,
  error: false,
  visibilityFilter: gamesVisibilityFilters.ALL
};

const fetchGamesLabel = "fetch-games-label";

const gamesSlice = createSlice({
  name: "games",
  initialState,

  reducers: {
    SET_GAMES: (state, action) => {
      state.items = action.payload;
      state.error = false;
    },
    SET_FETCH_ERROR: (state, action) => {
      state.error = true;
    },
    TOGGLE_IGNORE: (state, action) => {
      state.items.map(game => {
        if (game.id === action.payload.id)
          game.ignored = action.payload.ignored;
        return game;
      });
    },
    TOGGLE_WHITELIST: (state, action) => {
      state.items.map(game => {
        if (game.id === action.payload.id)
          game.whitelisted = action.payload.whitelisted;
        return game;
      });
    },
    SET_GAMES_VISIBILITY_FILTER: (state, action) => {
      state.visibilityFilter = action.payload;
    }
  },
  extraReducers: {
    //Extra Reducers are reducers that wont have Auto-generated actions creaters and naming-prefix
    [API_START]: (state, action) => {
      if (action.payload === fetchGamesLabel) {
        state.loading = true;
        state.error = false;
      }
    },
    [API_END]: (state, action) => {
      if (action.payload === fetchGamesLabel) {
        state.loading = false;
      }
    }
  }
});

export const FETCH_GAMES = () =>
  apiAction({
    url: "/api/games",
    onSuccess: gamesSlice.actions.SET_GAMES,
    onFailure: gamesSlice.actions.SET_FETCH_ERROR,
    label: fetchGamesLabel
  });

export const TOGGLE_IGNORE_GAME = id =>
  apiAction({
    url: "/api/games/ignore",
    method: "POST",
    data: { id },
    onSuccess: data => gamesSlice.actions.TOGGLE_IGNORE({ ...data, id })
  });

export const TOGGLE_WHITELIST_GAME = id =>
  apiAction({
    url: "/api/games/whitelist",
    method: "POST",
    data: { id },
    onSuccess: data => gamesSlice.actions.TOGGLE_WHITELIST({ ...data, id })
  });

const gamesReducer = gamesSlice.reducer;

export default gamesReducer;

export const { SET_GAMES_VISIBILITY_FILTER } = gamesSlice.actions;

import { createSlice } from "@reduxjs/redux-toolkit";
import { API_START, API_END } from "../middlewares/apiMiddleware";

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

export const fetchGamesLabel = "fetch-games-label";
export const fetchGameLabel = "fetch-game-label";

const gamesSlice = createSlice({
  name: "games",
  initialState,

  reducers: {
    SET_GAMES: (state, action) => {
      state.items = action.payload;
      state.error = false;
    },
    SET_GAME: (state, action) => {
      state.game = action.payload;
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
      if (state.game && state.game.id === +action.payload.id) {
        state.game.ignored = !state.game.ignored;
      }
    },
    TOGGLE_WHITELIST: (state, action) => {
      state.items.map(game => {
        if (game.id === action.payload.id)
          game.whitelisted = action.payload.whitelisted;
        return game;
      });
      if (state.game && state.game.id === +action.payload.id) {
        state.game.whitelisted = !state.game.whitelisted;
      }
    },
    TOGGLE_LIBRARY: (state, action) => {
      state.items.map(game => {
        if (game.id === action.payload.id)
          game.inLibrary = action.payload.inLibrary;
        return game;
      });
      if (state.game && state.game.id === +action.payload.id) {
        state.game.inLibrary = !state.game.inLibrary;
      }
    },
    SET_GAMES_VISIBILITY_FILTER: (state, action) => {
      state.visibilityFilter = action.payload;
    }
  },
  extraReducers: {
    //Extra Reducers are reducers that wont have Auto-generated actions creaters and naming-prefix
    [API_START]: (state, action) => {
      if (
        action.payload === fetchGamesLabel ||
        action.payload === fetchGameLabel
      ) {
        state.loading = true;
        state.error = false;
      }
    },
    [API_END]: (state, action) => {
      if (
        action.payload === fetchGamesLabel ||
        action.payload === fetchGameLabel
      ) {
        state.loading = false;
      }
    }
  }
});

export const actions = gamesSlice.actions;

const gamesReducer = gamesSlice.reducer;
export default gamesReducer;

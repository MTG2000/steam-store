import { apiAction } from "../middlewares/apiMiddleware";
import {
  actions,
  fetchGamesLabel,
  fetchGameLabel
} from "../reducers/gamesReducer";

export const FETCH_GAMES = () =>
  apiAction({
    url: "/api/games",
    onSuccess: actions.SET_GAMES,
    onFailure: actions.SET_FETCH_ERROR,
    label: fetchGamesLabel
  });

export const FETCH_GAME = id =>
  apiAction({
    url: `/api/games/${id}`,
    onSuccess: actions.SET_GAME,
    onFailure: actions.SET_FETCH_ERROR,
    label: fetchGameLabel
  });

export const TOGGLE_IGNORE_GAME = id =>
  apiAction({
    url: "/api/games/ignore",
    method: "POST",
    data: { id },
    onSuccess: data => actions.TOGGLE_IGNORE({ ...data, id })
  });

export const TOGGLE_WHITELIST_GAME = id =>
  apiAction({
    url: "/api/games/whitelist",
    method: "POST",
    data: { id },
    onSuccess: data => actions.TOGGLE_WHITELIST({ ...data, id })
  });

export const TOGGLE_LIBRARY_GAME = id =>
  apiAction({
    url: "/api/games/library",
    method: "POST",
    data: { id },
    onSuccess: data => actions.TOGGLE_LIBRARY({ ...data, id })
  });

export const { SET_GAMES_VISIBILITY_FILTER } = actions;

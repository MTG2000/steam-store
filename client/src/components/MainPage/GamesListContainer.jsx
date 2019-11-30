import { connect } from "react-redux";
import {
  FETCH_GAMES,
  TOGGLE_IGNORE_GAME,
  TOGGLE_WHITELIST_GAME,
  gamesVisibilityFilters
} from "../../store/reducers/gamesReducer";
import GamesList from "./GamesList";

const filterGames = (games, filter) => {
  let filteredGames = [];
  switch (filter) {
    case gamesVisibilityFilters.ALL_NOT_IGNORED:
      filteredGames = games.filter(g => !g.ignored);
      break;
    case gamesVisibilityFilters.IGONRED:
      filteredGames = games.filter(g => g.ignored);
      break;
    case gamesVisibilityFilters.WHITELISTED:
      filteredGames = games.filter(g => g.whitelisted);
      break;
    default:
      filteredGames = games;
      break;
  }

  return filteredGames;
};

const mapStateToProps = state => ({
  games: filterGames(state.games.items, state.games.visibilityFilter),
  loading: state.games.loading,
  error: state.games.error
});

const GamesListContainer = connect(mapStateToProps, {
  FETCH_GAMES,
  TOGGLE_IGNORE_GAME,
  TOGGLE_WHITELIST_GAME
})(GamesList);

export default GamesListContainer;

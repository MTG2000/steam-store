import React, { useEffect, useState } from "react";
import { Container, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import Loading from "../layouts/Loading";
import ErrorComponent from "../layouts/Error";
import {
  FETCH_GAMES,
  TOGGLE_LIBRARY_GAME
} from "../../store/actions/gamesActions";
import GamesList from "./GamesList";
import { SET_ACTIVE_PAGE, appPages } from "../../store/reducers/appReducers";

const LibraryPage = ({
  games,
  loading,
  error,
  FETCH_GAMES,
  SET_ACTIVE_PAGE,
  TOGGLE_LIBRARY_GAME
}) => {
  document.title = "My Library";

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    FETCH_GAMES();
    setMounted(true);
  }, [FETCH_GAMES]);

  useEffect(() => {
    SET_ACTIVE_PAGE(appPages.library);
  }, [SET_ACTIVE_PAGE]);

  if (loading || !mounted) return <Loading />;
  if (error) return <ErrorComponent />;

  if (games.length === 0)
    return (
      <Typography variant="h3" component="h3" color="textPrimary">
        You dont have any games in your library yet
      </Typography>
    );

  return (
    <Container>
      <Typography variant="h3" component="h1" color="textPrimary" gutterBottom>
        Games You Own:
      </Typography>
      <GamesList games={games} removeGame={TOGGLE_LIBRARY_GAME} />
    </Container>
  );
};

const mapStateToProps = state => ({
  games: state.games.items.filter(g => g.inLibrary),
  loading: state.games.loading,
  error: state.games.error
});

export default connect(mapStateToProps, {
  FETCH_GAMES,
  SET_ACTIVE_PAGE,
  TOGGLE_LIBRARY_GAME
})(LibraryPage);

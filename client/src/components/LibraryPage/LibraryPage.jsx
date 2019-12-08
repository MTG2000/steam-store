import React, { useEffect, useState } from "react";
import { Container, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import Loading from "../layouts/Loading";
import ErrorComponent from "../layouts/Error";
import { FETCH_GAMES } from "../../store/actions/gamesActions";
import GamesList from "./GamesList";

const LibraryPage = ({ games, loading, error, FETCH_GAMES }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    FETCH_GAMES();
    setMounted(true);
  }, [FETCH_GAMES]);

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
      <GamesList games={games} />
    </Container>
  );
};

const mapStateToProps = state => ({
  games: state.games.items.filter(g => g.inLibrary),
  loading: state.games.loading,
  error: state.games.error
});

export default connect(mapStateToProps, { FETCH_GAMES })(LibraryPage);

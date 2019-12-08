import React, { useEffect } from "react";
import { Container, Grid, Box } from "@material-ui/core";
import GamesListContainer from "./GamesListContainer";
import VisibilityFilters from "./VisibilityFilters";
import ErrorComponent from "../layouts/Error";
import Loading from "../layouts/Loading";
import { connect } from "react-redux";
import { FETCH_GAMES } from "../../store/actions/gamesActions";
import GamesCarouselContainer from "./GamesCarouselContainer";

const MainPage = ({ games, loading, error, FETCH_GAMES }) => {
  useEffect(() => {
    FETCH_GAMES();
  }, [FETCH_GAMES]);

  if (loading) return <Loading />;
  if (error) return <ErrorComponent />;
  if (games.length === 0) return <Loading />;

  return (
    <Container>
      <GamesCarouselContainer />
      <Grid container justify="space-between" alignItems="flex-start">
        <Grid item xs={12} md={10}>
          <GamesListContainer />
        </Grid>
        <Box mt={{ xs: 10 }} />
        <Grid item container justify="center" xs={12} md={2}>
          <VisibilityFilters />
        </Grid>
      </Grid>
    </Container>
  );
};

const mapStateToProps = state => ({
  games: state.games.items,
  loading: state.games.loading,
  error: state.games.error
});

export default connect(mapStateToProps, { FETCH_GAMES })(MainPage);

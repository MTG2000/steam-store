import React, { useEffect } from "react";
import Loading from "../layouts/Loading";
import ErrorComponent from "../layouts/Error";
import { Box, Grid } from "@material-ui/core";
import GameCard from "./GameCard";

const GamesList = ({
  games,
  loading,
  error,
  FETCH_GAMES,
  TOGGLE_IGNORE_GAME,
  TOGGLE_WHITELIST_GAME
}) => {
  useEffect(() => {
    FETCH_GAMES();
  }, [FETCH_GAMES]);

  if (loading) return <Loading />;
  if (error) return <ErrorComponent />;

  return (
    <Box>
      <Grid container justify="center">
        {games.map(game => (
          <Grid item key={game.id}>
            <GameCard
              game={game}
              handleIgnore={() => TOGGLE_IGNORE_GAME(game.id)}
              handleWhitelist={() => TOGGLE_WHITELIST_GAME(game.id)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GamesList;

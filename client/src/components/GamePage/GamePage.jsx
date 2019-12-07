import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Box,
  makeStyles,
  Grid,
  useTheme,
  Button
} from "@material-ui/core";
import Loading from "../layouts/Loading";
import ErrorComponent from "../layouts/Error";
import { connect } from "react-redux";
import {
  FETCH_GAME,
  TOGGLE_WHITELIST_GAME,
  TOGGLE_IGNORE_GAME,
  TOGGLE_LIBRARY_GAME
} from "../../store/reducers/gamesReducer";

const useStyles = makeStyles({
  image: props => ({
    height: "auto",
    maxHeight: 720,
    "&>img": {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }),
  btn: props => ({
    margin: "20px 20px 20px 0"
  }),
  addToLibraryBtn: {
    background: "#3c970a",
    color: "#fff",
    marginRight: 20,
    "&:hover": {
      background: "#296b06"
    },
    "&.disabled": {
      background: "#245634"
      // pointerEvents: "none"
    }
  }
});

const GamePage = ({
  match,
  game,
  loading,
  error,
  FETCH_GAME,
  TOGGLE_IGNORE_GAME,
  TOGGLE_WHITELIST_GAME,
  TOGGLE_LIBRARY_GAME
}) => {
  const { id } = match.params;
  const theme = useTheme();
  const classes = useStyles({ ...theme });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    FETCH_GAME(id);
    setMounted(true);
  }, [FETCH_GAME, id]);

  if (loading || !mounted) return <Loading />;
  if (error) return <ErrorComponent />;

  if (!game) return <Loading />;

  return (
    <Container>
      <Box py={4}>
        <Typography
          variant="h3"
          component="h1"
          color="textPrimary"
          gutterBottom
        >
          {game.title}
        </Typography>
        <Grid container justify="space-between">
          <Grid item xs={12} md={8}>
            <div className={classes.image}>
              <img src={game.image} alt={game.title} />
            </div>
            <div>
              <Button
                variant={game.whitelisted ? "contained" : "outlined"}
                size="large"
                color="secondary"
                className={classes.btn}
                onClick={() => TOGGLE_WHITELIST_GAME(id)}
              >
                {game.whitelisted ? "Whitelisted" : "Whitelist"}
              </Button>
              <Button
                variant={game.ignored ? "contained" : "outlined"}
                size="large"
                color="secondary"
                className={classes.btn}
                onClick={() => TOGGLE_IGNORE_GAME(id)}
              >
                {game.ignored ? "Ignored" : "Ignore"}
              </Button>
            </div>
            <Box
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
              pb={5}
            >
              <Button
                variant="contained"
                className={`${classes.addToLibraryBtn} ${
                  game.inLibrary ? "disabled" : ""
                }`}
                size="large"
                onClick={() => TOGGLE_LIBRARY_GAME(id)}
              >
                {game.inLibrary ? "In Library" : "Add To Library"}
              </Button>
              <Typography variant="h6" component="h6" color="textPrimary">
                {game.price} $
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box px={3}>
              <Typography variant="h5" color="textPrimary" gutterBottom>
                About This Game
              </Typography>
              <Typography variant="body1" color="textPrimary">
                {game.description}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

const mapStateToProps = state => ({
  game: state.games.game,
  loading: state.games.loading,
  error: state.games.error
});

export default connect(mapStateToProps, {
  FETCH_GAME,
  TOGGLE_IGNORE_GAME,
  TOGGLE_WHITELIST_GAME,
  TOGGLE_LIBRARY_GAME
})(GamePage);

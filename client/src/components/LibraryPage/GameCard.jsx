import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  useTheme,
  Grid
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles({
  card: props => ({
    height: 240,
    maxWidth: 900,
    margin: "20px 30px 0 0",
    position: "relative",
    background: props.palette.primary.main,
    boxShadow: "3px 4px 10px #112",
    opacity: props.ignored ? 0.5 : 1
  }),
  media: {
    width: 240,
    height: "100%"
  },
  content: props => ({
    height: "30%",
    alignSelf: "center"
    // color: props.palette.primary.contrastText
  }),
  title: {
    height: "46%"
  }
});

const GameCard = props => {
  const { title, price, thumbnail, ignored, whitelisted } = props.game;
  const theme = useTheme();
  const classes = useStyle({ ...theme, ignored, whitelisted });

  return (
    <Card className={classes.card}>
      <Grid container style={{ height: "100%" }}>
        <CardMedia className={classes.media} image={thumbnail} title={title} />
        <CardContent className={classes.content}>
          <Typography
            variant="h4"
            component="h6"
            className={classes.title}
            color="textPrimary"
          >
            {title}
          </Typography>
        </CardContent>
      </Grid>
    </Card>
  );
};

export default GameCard;

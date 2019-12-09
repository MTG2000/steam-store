import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  useTheme,
  Grid,
  Button
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

// const useStyle = makeStyles({
//   card: props => ({
//     maxWidth: 900,
//     margin: "20px 30px 0 0",
//     position: "relative",

//     background: props.palette.primary.dark,
//     boxShadow: "3px 4px 10px #112"
//   }),
//   media: props => ({
//     width: 120,
//     height: 120,
//     [props.breakpoints.up("sm")]: {
//       width: 240,
//       height: 240
//     }
//   }),
//   content: props => ({
//     flex: 10,
//     // minWidth: 240,
//     alignSelf: "center",
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent: "space-between",
//     alignItems: "center"
//   }),
//   title: props => ({
//     flex: 3,
//     [props.breakpoints.down("sm")]: {
//       fontSize: "1.5rem"
//     },
//     "& a": {
//       color: "#FFF"
//     }
//   }),
//   downloadBtn: props => ({
//     zIndex: 10,
//     color: "#FFF",
//     background: "#3c9353",
//     display: "block",
//     marginBottom: 10,
//     [props.breakpoints.down("sm")]: {
//       fontSize: "0.6rem"
//     },
//     "&:hover": {
//       background: "#0e7d2b"
//     }
//   }),
//   removeBtn: {
//     color: "red",
//     textAlign: "center"
//   }
// });

const useStyle = makeStyles({
  card: props => ({
    width: 240,
    margin: "20px auto",
    position: "relative",
    background: props.palette.primary.dark,
    boxShadow: "3px 4px 10px #112",
    [props.breakpoints.up("md")]: {
      width: "100%",
      maxWidth: 900
    }
  }),
  content: props => ({
    width: "100%",
    paddingTop: 25,
    [props.breakpoints.up("md")]: {
      width: "auto",
      flex: 3,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }),
  media: props => ({
    width: "100%",
    height: 240,
    [props.breakpoints.up("sm")]: {
      width: 240,
      height: 240
    }
  }),
  title: {
    "& a": {
      color: "#FFF"
    }
  },
  downloadBtn: {
    color: "#FFF",
    background: "#3c9353",
    display: "block",
    width: 128,
    margin: "10px auto"
  },
  removeBtn: {
    color: "#ca4545",
    display: "block",
    width: 128,
    margin: "10px auto"
  }
});

const GameCard = props => {
  const { id, title, thumbnail } = props.game;
  const theme = useTheme();
  const classes = useStyle({ ...theme });

  return (
    <Card className={classes.card}>
      <Grid container>
        <CardMedia className={classes.media} image={thumbnail} title={title} />
        <CardContent className={classes.content}>
          <Typography variant="h4" component="h6" className={classes.title}>
            <Link to={`/games/${id}`}>{title}</Link>
          </Typography>
          <div>
            <div>
              <Button
                variant="contained"
                color="secondary"
                className={classes.downloadBtn}
                size="large"
                href="#download"
              >
                Download
              </Button>
            </div>
            <div>
              <Button className={classes.removeBtn} size="small">
                <Typography>Remove</Typography>
              </Button>
            </div>
          </div>
        </CardContent>
      </Grid>
    </Card>
  );
};

export default GameCard;

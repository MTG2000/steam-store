import React from "react";
import { Paper, Typography, makeStyles, Grid, Box } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";

const useStyles = makeStyles({
  paper: props => ({
    backgroundColor: props.palette.primary.main
  }),
  image: {
    height: "70vh",
    maxHeight: 700,
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center top"
    }
  }
});

const GamesCarouselPage = ({ title, img, description }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  description = description.slice(0, 220) + " ... ";

  return (
    <Paper className={classes.paper}>
      <Grid container>
        <Grid item xs={12} md={9} className={classes.image}>
          <img src={img} alt={title} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Box px={2} py={2} pt={7}>
            <Typography variant="h5" component="h2" color="textPrimary">
              {title}
            </Typography>
            <Typography variant="p" component="h2" color="textSecondary">
              {description}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default GamesCarouselPage;

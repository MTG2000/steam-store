import React from "react";
import { Container, Grid } from "@material-ui/core";
import GamesListContainer from "./GamesListContainer";
import VisibilityFilters from "./VisibilityFilters";
import GamesCarousel from "./GamesCarousel";

const MainPage = () => {
  return (
    <Container>
      <GamesCarousel />
      <Grid container justify="space-between" alignItems="flex-start">
        <Grid item xs={12} md={10}>
          <GamesListContainer />
        </Grid>
        <Grid item xs={12} md={2}>
          <VisibilityFilters />
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainPage;

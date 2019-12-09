import React from "react";
import Slider from "infinite-react-carousel";
import GamesCarouselPage from "./GamescarouselPage";
import { NavigateBefore, NavigateNext } from "@material-ui/icons";
import { Link } from "react-router-dom";

const GamesCarousel = ({ games }) => {
  const arrowStyle = {
    color: "#FFF",
    top: "50%"
  };

  return (
    <Slider
      dots
      autoplay={true}
      nextArrow={<NavigateNext style={arrowStyle} fontSize="large" />}
      prevArrow={<NavigateBefore style={arrowStyle} fontSize="large" />}
    >
      {games.map(game => (
        <Link to={`/games/${game.id}`} key={game.id}>
          <GamesCarouselPage
            title={game.title}
            description={game.description}
            img={game.image}
          />
        </Link>
      ))}
    </Slider>
  );
};

export default GamesCarousel;

import React from "react";
import { Slider } from "infinite-react-carousel";
import GamesCarouselPage from "./GamescarouselPage";
import { NavigateBefore, NavigateNext } from "@material-ui/icons";

const GamesCarousel = () => {
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
      <GamesCarouselPage
        title="Red Dead Redemotion 2"
        description="America, 1899. The end of the Wild West era has begun. After a robbery goes badly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive"
        img="https://static.itavisen.no/media/2018/10/red-dead-redemption-2-hero-banner-03-ps4-us-07jun18-1-e1539943460488.jpg"
      />
      <GamesCarouselPage
        title="Final Fantasy XV"
        description="Get ready to be at the centre of the ultimate fantasy adventure, now for Windows PC.

Joined by your closest friends on the roadtrip of a lifetime through a breathtaking open world, witness stunning landscapes and encounter larger-than-life beasts on your journey to reclaim your homeland from an unimaginable foe.

In an action-packed battle system, channel the power of your ancestors to warp effortlessly through the air in thrilling combat, and together with your comrades, master the skills of weaponry, magic and team-based attacks."
        img="https://images10.newegg.com/BizIntell/item/74/165/74-165-112/Final-Fantasy-XV-Royal-Edition.jpg"
      />
      <GamesCarouselPage
        img="https://cdn.shopify.com/s/files/1/0747/3829/products/mHP1773_1024x1024.jpg?v=1511950075"
        description="America, 1961. The assassination of Nazi General Deathshead was a short-lived victory. The Nazis maintain their stranglehold on the world. You are BJ Blazkowicz, aka “Terror-Billy,” member of the Resistance, scourge of the Nazi empire, and humanity’s last hope for liberty"
        title="Wolfenstien The New Colosuss"
      />
    </Slider>
  );
};

export default GamesCarousel;

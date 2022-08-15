import React from "react";
import Banner from "../../components/Banner/Banner";
import GameList from "../../components/GameList/GameList";
import Navbar from "../../components/Navbar/Navbar";
import GlobalStyles from "../../styles/GlobalStyles";
import { data } from "../../gameListData.js";
import { Container, Wrapper } from "./Games.styles";

const Games = () => {
  return (
    <Container>
      <GlobalStyles />
      <Navbar />
      <Wrapper>
        <Banner />
        {data.map((card, index) => {
          return (
            <GameList
              heading={card.heading}
              cardImages={card.cardImages}
              key={index}
            />
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default Games;

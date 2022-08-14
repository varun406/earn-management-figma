import React from "react";
import GameCard from "../Game Card/GameCard";
import { CardDeck, Container, Wrapper } from "./GameList.styles";

const GameList = ({ heading, cardImages }) => {
  return (
    <Container>
      <Wrapper>
        <h1>{heading}</h1>
        <CardDeck>
          {cardImages.map((image, index) => {
            return <GameCard images={image} key={index} />;
          })}
        </CardDeck>
      </Wrapper>
    </Container>
  );
};

export default GameList;

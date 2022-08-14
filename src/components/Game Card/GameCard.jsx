import React from "react";
import styled from "styled-components";
import { Container, SectionOne, SectionTwo } from "./GameCard.styles";

function GameCard({ images }) {
  return (
    <Container images={images}>
      <SectionOne>
        <h1>Game Type</h1>
        <img src="/assets/svg/games/gamecard-like.svg" alt="like" />
      </SectionOne>
      <SectionTwo>
        <h1>
          Axie Infinity •
          <span>
            <p> @Publisher Name</p>
          </span>
        </h1>
        <h3>
          <img src="/assets/svg/games/gamecard-rating.svg" alt="rating" />
          4.7
          <span>
            <p>10.08k</p>
          </span>
        </h3>
        <p>
          Collect different types of NFTs – Land, Axie and Items. Earn through
          battling your Axies in the PVP arena. Collect different types of NFTs
          – Land, Axie and Items. Read more...
        </p>
      </SectionTwo>
    </Container>
  );
}

export default GameCard;

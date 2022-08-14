import React from "react";

import {
  Container,
  GroupOne,
  GroupTwo,
  Trailer,
  Wrapper,
} from "./Banner.styles";

function Banner() {
  return (
    <Container>
      <Wrapper>
        <GroupOne>
          <h1>Apeiron</h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua Amet minii
            mollit non deser unt ullamco est sit aliqua. Amet minim mollit non
            deserunt ullamco est sit aliqua Amet minii mollit non deserunt
            ullamco est sit aliqua.
          </p>
        </GroupOne>
        <GroupTwo>
          <Trailer>
            <h1>TRAILER</h1>
            <button></button>
          </Trailer>
        </GroupTwo>
      </Wrapper>
    </Container>
  );
}

export default Banner;

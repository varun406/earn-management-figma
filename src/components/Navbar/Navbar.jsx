import React from "react";
import {
  Container,
  Wrapper,
  Nav,
  ButtonGroup,
  LogInButton,
  SignUpButton,
} from "./Navbar.styles";

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <img src="/assets/svg/logo.svg" alt="logo" />
        <Nav>
          <a href="#">Games</a>
          <a href="#">News</a>
          <a href="#">Allies</a>
          <a href="#">Badges</a>
          <img src="/assets/svg/search.svg" alt="search_icon" />
        </Nav>
        <ButtonGroup>
          <LogInButton>Log In</LogInButton>
          <SignUpButton>Sign Up</SignUpButton>
        </ButtonGroup>
      </Wrapper>
    </Container>
  );
}

export default Navbar;

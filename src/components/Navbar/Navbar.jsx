import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import {
  Container,
  Wrapper,
  Nav,
  ButtonGroup,
  LogInButton,
  SignUpButton,
  ThemeToggle,
} from "./Navbar.styles";

function Navbar() {
  const { handleToggle } = useContext(ThemeContext);

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
          <>
            <LogInButton>Log In</LogInButton>
            <SignUpButton>Sign Up</SignUpButton>
          </>
          <ThemeToggle>
            <button onClick={() => handleToggle()}>Light</button>
          </ThemeToggle>
        </ButtonGroup>
      </Wrapper>
    </Container>
  );
}

export default Navbar;

import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 109px;
  background: ${(props) => props.theme.headingBgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

export const Wrapper = styled.div`
  width: min(1300px, calc(100% - 3rem));
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.textColor};

  img {
    width: 74px;
    height: 74px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 3.5rem;

  a {
    text-decoration: none;
    font-weight: 400;
    color: ${(props) => props.theme.textColor};
  }

  img {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
`;

export const SignUpButton = styled.button`
  font-weight: ${(props) => props.theme.fontweight}; //! Error
  font-size: 14px;
  padding: 16px 30px;
  background: linear-gradient(270deg, #2286dc 0%, #4db3dc 100%);
  border-radius: 12px;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${(props) => props.theme.backgroundColor};
`;

export const LogInButton = styled(SignUpButton)`
  color: ${(props) => props.theme.textColor};
  padding: 0;
  background: transparent;
`;

export const ThemeToggle = styled.div`
  width: 100px;
  height: 50px;

  button {
    color: ${(props) => props.theme.textColor};
    background-color: ${(props) => props.theme.backgroundColor};
    cursor: pointer;
  }
`;

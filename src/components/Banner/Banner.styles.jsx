import styled from "styled-components";

export const Container = styled.div`
  width: 1285px;
  height: 428px;
  background: url(/assets/svg/games/banner.png);
  border-radius: 25px;
  display: flex;
  align-items: center;
`;

export const Wrapper = styled.div`
  background: rgba(255, 255, 255, 0.2);
  width: 300px;
  height: 350px;
  padding: 35px 20px;
  display: flex;
  flex-direction: column;
  text-align: justify;
  gap: 70px;
  margin-left: 40px;
  color: white;
  border-radius: 25px;

  h1 {
    font-size: 24px;
    font-weight: 600;
  }

  p {
    margin-top: 25px;
    font-size: 14px;
    font-weight: 500;
  }
`;

export const GroupOne = styled.div``;
export const GroupTwo = styled.div``;

export const Trailer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);
  font-size: 20px;
  border-radius: 30px;

  button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 0 10px 0 50px;
    cursor: pointer;
    font-weight: 400;
    font-style: normal;
    outline: none;
    border: none;
    background: url(/assets/svg/trailer-play.svg);
    background-repeat: no-repeat;
  }
`;

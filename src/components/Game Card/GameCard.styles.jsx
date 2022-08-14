import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 306px;
  height: 390px;
  background: url(${(props) => props.images});
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
`;

export const SectionOne = styled.div`
  display: flex;
  justify-content: space-between;

  h1 {
    width: 90px;
    height: 35px;
    border-radius: 50px;
    display: grid;
    place-items: center;
    background: rgba(13, 13, 13, 0.66);
    font-family: "Nunito", sans-serif;
    font-weight: 800;
    font-size: 12px;
  }
`;

export const SectionTwo = styled.div`
  width: 290px;
  height: 125px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 7px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    font-size: 16px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 7px;
  }

  span p {
    font-size: 12px;
    font-weight: 500;
    color: #c5c5c5;
  }

  h3 {
    width: 52px;
    height: 21px;
    display: flex;
    align-items: center;
    gap: 13px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 2.5px;
    font-size: 14px;
    font-weight: 700;
  }

  p {
    font-size: 10px;
    font-weight: 500;
  }
`;

import styled from "styled-components";

export const MainStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 2rem;
  min-height: 100vh;
  @media screen and (min-width: 600px) {
    padding: 6rem;
  }
  .load-more-button {
    width: 60%;
    max-width: 800px;
    height: 60px;
    border-radius: 10px;
    font-size: 20px;
    border: 1px solid #b554d7;
    color: #b554d7;
    background-color: rgb(var(--background-rgb));
    transition: all 0.1s ease-in-out;
    cursor: pointer;
    &:hover {
      color: rgb(var(--background-rgb));
      background-color: #b554d7;
    }
  }
`
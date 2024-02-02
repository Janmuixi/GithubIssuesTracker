import styled from "styled-components";

export const IssueStyled = styled.section`
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 2rem;
  min-height: 100vh;
  @media screen and (min-width: 1012px) {
    padding: 0rem;
  }
  .content {
    width: 100%;
    @media screen and (min-width: 1012px) {
      padding: 6rem;
      width: 1000px;
    }
  }
  .title {
    padding-bottom: 10px;
    border-bottom: 3px solid rgba(var(--foreground-rgba-light));
    span {
      color: #b554d7;
      font-weight: 500;
      margin-left: 10px;
    }
  }
  .subtitle {
    margin-top: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    .state {
      width: 80px;
      height: 40px;
      border: 1px solid #fff;
      background-color: green;
      color: white;
      border-radius: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      &.closed {
        background-color: red;
      }
    }
  }
  .body {
    margin-top: 30px;
  }
`;

export const MarkdownText = styled.div`
  text-align: left;
  line-height: 32px;
  border: 1px solid rgba(var(--foreground-rgba-light));
  border-radius: 5px;
  .body-header {
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    border-bottom: 1px solid rgba(var(--foreground-rgba-light));
    padding: 5px 15px;
    min-height: 50px;
    background-color: rgba(var(--gray-light-rbga));
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .body-content {
    padding: 15px;
    * {
      margin-bottom: 10px;
      text-wrap: wrap;
      word-break: break-word;
    }
    a {
      text-decoration: underline;
    }
    ol,
    ul {
      margin-left: 30px;
    }
    img {
      max-width: 350px;
      @media screen and (min-width: 1012px) {
        max-width: 700px;
      }
    }
    pre {
      background-color: rgba(var(--foreground-rgba-light));
      padding: 10px;
      border-radius: 10px;
    }
  }
`;

export const BackButtonStyled = styled.div`
  a {
    display: flex;
    align-items: center;
    font-weight: 700;
    &:hover {
      text-decoration: underline;
    }
  }
  margin-bottom: 20px;
`
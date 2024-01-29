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
    padding: 6rem;
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
    border-bottom: 3px solid rgba(255, 255, 255, 0.1);
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
      color: #fff;
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
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  .body-header {
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding: 5px 15px;
    min-height: 50px;
    background-color: rgba(117, 117, 117, 0.5);
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
      background-color: rgba(255, 255, 255, 0.1);
      padding: 10px;
      border-radius: 10px;
    }
  }
`;

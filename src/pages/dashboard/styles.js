import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f2f2f2;
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    box-shadow: 2px 2px 2px 2px gray;
    min-height: 50vh;
    min-width: 60vw;
    background: #ffffff;
    border: 1px solid #d1dce3;
    border-radius: 4px;
  }
  .form {
    min-height: 100%;
    min-width: 60%;
  }
  h1 {
    font-family: "SourceSansPro";
    font-size: 24px;
    line-height: 28px;
    color: #656565;
  }
  .results {
    min-width: 40%;
    min-height: 100%;
    background: rgba(209, 220, 227, 0.18);
    border-radius: 4px;
  }
  
  h2 {
    font-family: "Source Sans Pro";
    font-style: italic;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    text-transform: uppercase;
    color: #3d75bb;
  }
  ul {
    font-family: "Source Sans Pro";
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
    line-height: 46px;
    color: #5d9cec;
    list-style: none;
    padding-inline-start: 0;
  }
  hr{
    width:80%;
  }
`;

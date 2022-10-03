import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    box-shadow: 2px 2px 2px 2px gray;
    min-height: 50vh;
    min-width: 60vw;
  }
  .form {
    min-height: 100%;
    min-width: 60%;
  }
  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    min-width: 50px;
    margin: 10px auto;
  }
  .results {
    min-width: 40%;
    min-height: 100%;
    background-color: lightgrey;
  }
  span{
    font-size:15px;
    color:#343b41;
    text-align:left;
    min-width:100%;
    align-content:left;
  }
  h3 {
    color: blue;
  }
`;

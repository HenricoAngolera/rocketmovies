import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid; 
  grid-template-rows: 105px auto;
  grid-template-areas: 
    "header"
    "content";
`;

export const Content = styled.div`
  grid-area: content;

  .flex{
    display: flex;
    gap: 40px;

    margin: 40px 0;
  }
`
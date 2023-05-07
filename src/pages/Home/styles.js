import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid; 
  grid-template-rows: 105px auto;
  grid-template-areas: 
    "header"
    "titlePage"
    "content";
`;

export const TitlePage = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  grid-area: titlePage;

  width: 1137px;
  margin: 50px auto 0;

`;

export const Content = styled.div`
  grid-area: content;
  margin: 0 auto 24px; 
  width: 1137px;

  padding-right: 24px;

  overflow: auto;

  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 8px;
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.PINK}; 
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.COLORS.WHITE}; 
  }
`;


export const ButtonBox = styled.div`
  width: 207px;
`;

export const Notes = styled.div`
  margin-top: 40px;

`;
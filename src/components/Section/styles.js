import styled from "styled-components";

export const Container = styled.section`
  grid-area: content;
  margin: 50px auto 24px; 
  width: 1137px;

  padding-right: 24px;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 8px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.PINK}; 
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.COLORS.WHITE}; 
  }

`;


export const Flex = styled.div`
  display: flex;
  align-items: baseline;
  gap: 20px;

  > h1 {
    margin-top: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 36px;
    font-weight: 500;
  }
`;
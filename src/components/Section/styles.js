import styled from "styled-components";

export const Container = styled.section`
  margin: 50px auto 24px; 
  width: 1137px;

  > h1 {
    margin-top: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 36px;
    font-weight: 500;
  }
`;
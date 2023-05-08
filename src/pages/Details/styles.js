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

export const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  margin-top: 24px;

  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > img {
    width: 16px;
    height: 16px;
    border-radius: 50%;
  }

  > svg {
    width: 16px;
    height: 16px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Tags = styled.div`
  margin-block: 40px;
`;
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid; 
  grid-template-rows: 105px auto;
  grid-template-areas: 
    "header"
    "content";
    
  .flex{
    display: flex;
    gap: 40px;

    margin: 40px 0;
  }
`;



export const Marks = styled.div`
  > p {
    margin: 40px 0 24px;

    font-size: 20px;
    color: ${({ theme }) => theme.COLORS.TEXT_GRAY};
  }
`;

export const Tags = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;

  padding: 16px;

  background-color: ${({ theme }) => theme.COLORS.BLACK};
  border-radius: 8px;
`;
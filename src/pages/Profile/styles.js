import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 144px;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};

    display: flex;
    align-items: center;

    padding: 0 124px;

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
      font-size: 24px;
    }
  }
`;

export const Form = styled.div`
  max-width: 340px;
  margin: 30px auto 0;
`;

export const Avatar = styled.div`
  position: relative;
  margin: -124px auto 32px;

  width: 186px;
  height: 186px;

  > img {
    border-radius: 50%;

    width: 186px;
    height: 186px;
  }

  > label {
    width: 48px;
    height: 48px;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px; 
    right: 7px;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 19px;
      height: 19px;
      color: ${({ theme }) => theme.COLORS.GRAY_500};
    }
  }
`;


export const SpaceInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin-bottom: 16px;
`;
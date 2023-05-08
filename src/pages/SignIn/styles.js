import styled from "styled-components";

import backgroundImg from "../../assets/background.png";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 134px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  > h1 {
    font-weight: 700;
    font-size: 48px;
    line-height: 63px;

    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > p {
    font-size: 14px;
    line-height: 18px;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
    text-align: start;
  }

  > h2 {
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;

    padding: 48px 0;
  }

  > a {
    margin-top: 42px;
    color: ${({ theme }) => theme.COLORS.PINK};

    text-align: center;
  }
`;

export const SpaceInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin-bottom: 24px;
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;
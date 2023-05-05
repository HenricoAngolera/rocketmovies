import styled from "styled-components";

export const Container = styled.div`
  grid-area: header;

  height: 105px;
  width: 100%;

  display: flex;
  justify-content: space-around;

  padding: 0 8px;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
`;

export const Logo = styled.h2`
  display: flex;
  align-items: center;

  font-size: 24px;
  color: ${({ theme }) => theme.COLORS.PINK}
`;

export const Search = styled.div`
  display: flex;
  align-items: center;

  width: 630px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  > img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;

    text-align: end;

    margin-left: 16px;
    line-height: 24px;

    a {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`;
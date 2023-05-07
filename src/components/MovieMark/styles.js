import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  width: max-content;

  background-color: ${({ theme, isNew }) => isNew ? "trasparent" : theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.GRAY_300}` : "none"};

  border-radius: 10px;
  padding-right: 16px;

  > button {
    border: none;
    background: none;
  }

  .pink-icon {
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > input {
    height: 56px;
    width: max-content;

    padding: 12px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    border: none;

    &:placeholder {
      color ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;


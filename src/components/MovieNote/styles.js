import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 222px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};

  border: none;
  border-radius: 16px;

  padding: 32px;
  margin-bottom: 24px;

  > h3 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24px;

    color: ${({ theme }) => theme.COLORS.WHITE};

    margin-bottom: 8px;
  }

  > p {
    font-size: 16px;
    line-height: 19px;
    color: ${({ theme }) => theme.COLORS.TEXT_GRAY};
    text-align: justify;

    margin-block: 15px;

    overflow: hidden; // Removendo barra de rolagem
    text-overflow: ellipsis; // Adicionando "..." ao final
    display: -webkit-box;
    -webkit-line-clamp: 2; // Quantidade de linhas
    -webkit-box-orient: vertical; 
  } 

  > footer {
    width: 100%;
    display: flex;
    margin-top: 24px;
  }
`;
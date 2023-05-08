import { BsArrowLeftShort } from "react-icons/bs";

import { Container, Flex } from "./styles";

import { ButtonText } from "../ButtonText";
import { Rating } from "../Rating";

export function Section({ title, stars: Stars, children }) {
  return (
    <Container>
      <ButtonText title="Voltar" icon={BsArrowLeftShort}/>
      <Flex>
        <h1>{title}</h1>
        {Stars && <Rating grade={Stars} isBigSize/>}
      </Flex>
      {children}
    </Container>
  );
}
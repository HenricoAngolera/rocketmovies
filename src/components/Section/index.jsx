import { BsArrowLeftShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import { Container, Flex } from "./styles";

import { ButtonText } from "../ButtonText";
import { Rating } from "../Rating";

export function Section({ title, stars: Stars, children }) {
  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }
  return (
    <Container>
      <ButtonText onClick={handleBack} title="Voltar" icon={BsArrowLeftShort}/>
      <Flex>
        <h1>{title}</h1>
        {Stars && <Rating grade={Stars} isBigSize/>}
      </Flex>
      {children}
    </Container>
  );
}
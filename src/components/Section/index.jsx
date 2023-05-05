import { Container } from "./styles";

import { ButtonText } from "../ButtonText";
import { BsArrowLeftShort } from "react-icons/bs";

export function Section({ title, children }) {
  return (
    <Container>
      <ButtonText title="Voltar" icon={BsArrowLeftShort}/>
      <h1>{title}</h1>
      {children}
    </Container>
  );
}
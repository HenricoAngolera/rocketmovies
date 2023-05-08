import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { BsArrowLeftShort } from "react-icons/bs";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

import { Container, Form, SpaceInput, ButtonBox, Background } from "./styles";
export function SignUp(){
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>
        <SpaceInput>
        <Input
            placeholder='Nome'
            type='text'
            icon={FiUser}
          />
          <Input
            placeholder='E-mail'
            type='text'
            icon={FiMail}
          />
          <Input
            placeholder='Senha'
            type='password'
            icon={FiLock}
          />
        </SpaceInput>
        <Button title="Entrar" />
        <ButtonBox>
          <ButtonText to="/" title="Voltar para o login" icon={BsArrowLeftShort}/>
        </ButtonBox>
      </Form>
      <Background />
    </Container>
  );
}
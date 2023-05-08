import { FiMail, FiLock } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form, SpaceInput, Background } from "./styles";
export function SignIn(){
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>
        <SpaceInput>
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
        <Button title="Entrar">
        </Button>

        <a href="#">Cadastrar</a>
      </Form>
      <Background />
    </Container>
  );
}
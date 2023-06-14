import { useState } from "react";
import { FiMail, FiLock } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form, SpaceInput, Background } from "./styles";
export function SignIn(){
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { signIn } = useAuth()

  const navigate = useNavigate()

  function handleSignIn(){
    signIn({ email, password })
  }

  function handleRegister() {
    navigate("/register")
  }

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
            onChange={e => setEmail(e.target.value)}
            />
          <Input
            placeholder='Senha'
            type='password'
            icon={FiLock}
            onChange={e => setPassword(e.target.value)}
            />
        </SpaceInput>
        <Button title="Entrar" onClick={handleSignIn}/>
        <a onClick={handleRegister}>Cadastrar</a>
      </Form>
      <Background />
    </Container>
  );
}
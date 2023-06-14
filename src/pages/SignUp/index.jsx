import { useState } from "react";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { BsArrowLeftShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api"

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

import { Container, Form, SpaceInput, ButtonBox, Background } from "./styles";
export function SignUp(){
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Fill all fields")
    }

    api.post("/users", {
      name, 
      email, 
      password
    })
      .then(() => {
        alert('Successfully registered user!')
        handleBack()
      })
      .catch((error) => {
        if(error.response){
          return alert(error.response.data.message)
        } else {
          return alert("Unable to register.")
        }
      })
  }

  function handleBack() {
    navigate(-1)
  }

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
            onChange={e => setName(e.target.value)}
          />
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
        <Button onClick={handleSignUp}  title="Entrar" />
        <ButtonBox>
          <ButtonText onClick={handleBack} title="Voltar para o login" icon={BsArrowLeftShort}/>
        </ButtonBox>
      </Form>
      <Background />
    </Container>
  );
}
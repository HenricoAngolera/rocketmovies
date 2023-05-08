import { FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { BsArrowLeftShort } from "react-icons/bs";

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

import { Container, Form, Avatar, SpaceInput } from "./styles";

export function Profile() {
  return(
    <Container>
      <header>
        <a href="/">
          <ButtonText title="Voltar" icon={BsArrowLeftShort}/>
        </a>
      </header>
      <Form>
      <Avatar>
          <img 
            src="https://github.com/HenricoAngolera.png" 
            alt="Foto do usuário" 
          />
          <label htmlFor="avatar">
            <FiCamera />
            <input 
              type="file"
              id="avatar" 
            />
          </label>
        </Avatar>
        <SpaceInput>
          <Input 
            placeholder="Nome"
            type="text"
            icon={FiUser}
          />
          <Input 
            placeholder="E-mail"
            type="text"
            icon={FiMail}
          />
        </SpaceInput>
        <SpaceInput>
          <Input 
            placeholder="Senha atual"
            type="password"
            icon={FiLock}
          />
          <Input 
            placeholder="Nova senha"
            type="password"
            icon={FiLock}
          />
        </SpaceInput>
        <Button title="Salvar"/>
      </Form>
    </Container>
  );
}
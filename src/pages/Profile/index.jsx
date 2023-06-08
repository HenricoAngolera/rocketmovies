import { useState } from "react";
import { FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { BsArrowLeftShort } from "react-icons/bs";

import { useAuth } from "../../hooks/auth";

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

import { Container, Form, Avatar, SpaceInput } from "./styles";

export function Profile() {
  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [newPassword, setNewPassword] = useState("")
  const [oldPassword, setOldPassword] = useState("")

  async function handleUpdate() {
    const user = {
      name,
      email,
      password: newPassword,
      old_password: oldPassword
    }

    await updateProfile({ user })
  }

  return(
    <Container>
      <header>
        <a href="/">
          <ButtonText to="/" title="Voltar" icon={BsArrowLeftShort}/>
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
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <Input 
            placeholder="E-mail"
            type="text"
            icon={FiMail}
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </SpaceInput>
        <SpaceInput>
          <Input 
            placeholder="Senha atual"
            type="password"
            icon={FiLock}
            onChange={e => setOldPassword(e.target.value)}
          />
          <Input 
            placeholder="Nova senha"
            type="password"
            icon={FiLock}
            onChange={e => setNewPassword(e.target.value)}
          />
        </SpaceInput>
        <Button title="Salvar" onClick={handleUpdate}/>
      </Form>
    </Container>
  );
}
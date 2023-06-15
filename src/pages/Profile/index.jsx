import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { BsArrowLeftShort } from "react-icons/bs";

import { api } from "../../services/api"
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

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

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder
  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  const navigate = useNavigate()

  async function handleUpdate() {
    const updated = {
      name,
      email,
      password: newPassword,
      old_password: oldPassword
    }

    const userUpdated = Object.assign(user, updated)

    await updateProfile({ user: userUpdated, avatarFile })
  }

  function handleChangeAvatar(event) { 
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  function handleBack() {
    navigate(-1)
  }

  return(
    <Container>
      <header>
        <a href="/">
          <ButtonText onClick={handleBack} title="Voltar" icon={BsArrowLeftShort}/>
        </a>
      </header>
      <Form>
      <Avatar>
          <img 
            src={avatar} 
            alt="Foto do usuário" 
          />
          <label htmlFor="avatar">
            <FiCamera />
            <input 
              type="file"
              id="avatar"
              onChange={handleChangeAvatar} 
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
import { useNavigate } from 'react-router-dom';

import { Container, Logo, Search, Profile, ToProfile } from './styles';

import { api } from '../../services/api'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { useAuth } from '../../hooks/auth';

import { Input } from '../../components/Input';

export function Header({ onSearch }) {
  const { signOut, user } = useAuth()

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

  const navigate = useNavigate()

  function toHome() {
    navigate("/")
  }

  return(
    <Container>

      <Logo>
        RocketMovies
      </Logo>

      <Search>
        <Input onClick={toHome} onChange={e => onSearch(e.target.value)} placeholder="Pesquise pelo título"/>
      </Search>

      <Profile>
        <div>
          <ToProfile to="/profile">
            <strong>{user.name}</strong>
          </ToProfile>
          <a href="#" onClick={signOut}>sair</a>
        </div>

        <ToProfile to="/profile">
          <img 
            src ={avatarUrl}
            alt ={user.name}
          />
        </ToProfile>

      </Profile>
    </Container>
  );
}
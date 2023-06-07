import { Container, Logo, Search, Profile, ToProfile } from './styles';

import { useAuth } from '../../hooks/auth';

import { Input } from '../../components/Input';

export function Header() {
  const { signOut } = useAuth()

  return(
    <Container>

      <Logo>
        RocketMovies
      </Logo>

      <Search>
        <Input placeholder="Pesquise pelo título"/>
      </Search>

      <Profile>
        <div>
          <ToProfile to="/profile">
            <strong>Henrico Angolera</strong>
          </ToProfile>
          <a href="#" onClick={signOut}>sair</a>
        </div>

        <ToProfile to="/profile">
          <img 
            src = "https://github.com/HenricoAngolera.png"
            alt = "Foto do usuário" 
          />
        </ToProfile>

      </Profile>
    </Container>
  );
}
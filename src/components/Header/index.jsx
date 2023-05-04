import { Container, Logo, Search, Profile } from './styles';

import { Input } from '../../components/Input';

export function Header() {
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
          <strong>Henrico Angolera</strong>
          <a href="#">sair</a>
        </div>

        <img 
          src = "https://github.com/HenricoAngolera.png"
          alt = "Foto do usuário" 
        />

      </Profile>
    </Container>
  );
}
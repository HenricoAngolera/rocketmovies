
import { Container, Marks, Tags } from './styles';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { MovieMark } from '../../components/MovieMark';

export function NewMovie(){
  return(
    <Container>
      <Header />
      
      <Section title="Novo Filme">
        <div className="flex">
          <Input placeholder="Título" />
          <Input type="number" placeholder="Sua nota (de 0 a 5)" />
        </div>
        <TextArea placeholder="Observações"/>
        <Marks>
          <p>Marcadores</p>
          <Tags>
            <MovieMark value="Aventura" />
            <MovieMark isNew placeholder="Novo Item" />
          </Tags>
        </Marks>
        <div className="flex">
          <Button title="Excluir Filme" isBlack/>
          <Button title="Salvar Alterações"/>
        </div>
      </Section>

    </Container>
  );
}
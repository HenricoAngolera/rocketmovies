
import { Container, Content } from './styles';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';

export function NewMovie(){
  return(
    <Container>
      <Header />
      <Content>
        <Section title="Novo Filme">
          <div class="flex">
            <Input placeholder="Título" />
            <Input type="number" placeholder="Sua nota (de 0 a 5)" />
          </div>
          <TextArea placeholder="Observações"/>
          <Button title="Salvar Alterações"/>
        </Section>
      </Content>

    </Container>
  );
}
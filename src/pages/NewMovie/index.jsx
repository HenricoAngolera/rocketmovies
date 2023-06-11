
import { Container, Marks, Tags } from './styles';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { MovieMark } from '../../components/MovieMark';
import { useState } from 'react';

export function NewMovie(){
  const [marks, setMarks] = useState([])
  const [newMark, setNewMark] = useState("")

  function handleNewMarks() {
    setMarks(prevState => [...prevState, newMark])
    console.log(marks)
    setNewMark("")
  }

  function handleRemoveMarks(deletedMark) {
    setMarks(prevState => prevState.filter(mark => mark !== deletedMark))
  }

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
            {
              marks.map((mark, index) => (
                <MovieMark 
                  key={String(index)}
                  value={mark}
                  onClick={() => {handleRemoveMarks(mark)}}
                />
              ))
            }
            <MovieMark 
              isNew 
              placeholder="Novo Item" 
              value={newMark}
              onChange={e => setNewMark(e.target.value)}
              onClick={handleNewMarks}
            />
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
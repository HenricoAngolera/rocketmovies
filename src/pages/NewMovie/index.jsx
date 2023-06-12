import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, Marks, Tags } from './styles';

import { api } from '../../services/api';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { MovieMark } from '../../components/MovieMark';

export function NewMovie(){
  const [title, setTitle] = useState("")
  const [rating, setRating] = useState(1)
  const [description, setDescription] = useState("")

  const [marks, setMarks] = useState([])
  const [newMark, setNewMark] = useState("")

  const navigate = useNavigate()

  function handleNewMarks() {
    setMarks(prevState => [...prevState, newMark])
    setNewMark("")
  }

  function handleRemoveMarks(deletedMark) {
    setMarks(prevState => prevState.filter(mark => mark !== deletedMark))
  }

  async function handleNewMovieNote() {
    console.log(marks)
    try {
      await api.post("/movie_notes", {
        title,
        description,
        rating,
        movie_tags: marks
      })
      alert("Note created with success!")
      navigate("/")
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert(error)
      }
    }
  }

  return(
    <Container>
      <Header />
      
      <Section title="Novo Filme">
        <div className="flex">
          <Input 
            placeholder="Título"
            onChange={e => setTitle(e.target.value)} 
          />
          <Input 
            type="number" 
            placeholder="Sua nota (de 1 a 5)"
            onChange={e => setRating(e.target.value)} 
          />
        </div>
        <TextArea 
          placeholder="Observações"
          onChange={e => setDescription(e.target.value)}
        />
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
          <Button 
            title="Salvar Alterações"
            onClick={handleNewMovieNote} 
          />
        </div>
      </Section>

    </Container>
  );
}
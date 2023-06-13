import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';

import { Container, Content, TitlePage, ButtonBox, Notes } from "./styles";

import { api } from '../../services/api';
import { Header } from "../../components/Header";
import { Button } from "../../components/Button"
import { MovieNote } from '../../components/MovieNote';

export function Home() {
  const [notes, setNotes] = useState([])

  const navigate = useNavigate()

  async function fetchNotes(searchTitle = '') {
    const response = await api.get(`/movie_notes?title=${searchTitle}`)
    setNotes(response.data)
  }

  function handleDetails (id) {
    navigate(`/details/${id}`)
  }

  useEffect(() => {
    fetchNotes()
  }, [])

  return(
    <Container>
      <Header onSearch={fetchNotes} />
        <TitlePage>
          <h1>Meus filmes</h1>
          <ButtonBox to="/new_movie">
            <Button title="Adicionar Filme" icon={AiOutlinePlus}/>
          </ButtonBox>
        </TitlePage>
      <Content>
        <Notes>
          {
            notes && notes.map(note => (
              <MovieNote 
                key={String(note.id)}
                data={note}
                onClick={() => handleDetails(note.id)}
              />
            ))
          }
        </Notes>
      </Content>
    </Container>
  );
}
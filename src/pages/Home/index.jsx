import { useEffect, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

import { Container, Content, TitlePage, ButtonBox, Notes } from "./styles";

import { api } from '../../services/api';
import { Header } from "../../components/Header";
import { Button } from "../../components/Button"
import { MovieNote } from '../../components/MovieNote';

export function Home() {
  const [search, setSearch] = useState("")
  const [notes, setNotes] = useState([])

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/movie_notes?title=${search}`)
      setNotes(response.data)
      console.log(response.data)
    }

    fetchNotes()

  }, [search])


  return(
    <Container>
      <Header />
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
              />
            ))
          }
        </Notes>
      </Content>
    </Container>
  );
}
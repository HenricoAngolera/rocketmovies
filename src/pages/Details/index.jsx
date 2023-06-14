import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiOutlineClockCircle } from 'react-icons/ai';

import { Container, Author, Tags } from "./styles";

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";

import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';

export function Details() {
  const [data, setData] = useState(null)

  const params = useParams()

  const { user } = useAuth()

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/movie_notes/${params.id}`)
      setData(response.data)
    }

    fetchNote()
  }, [])

  return(
    <Container>
      <Header />
      {
        data &&
        <Section title={data.title} stars={data.rating}>
          <Author>
            <img src={avatarUrl} alt={`Imagem de ${user.name}`} />
            <span className='author'>Por {user.name}</span>
            <AiOutlineClockCircle />
            <span className='time'>{data.created_at}</span> 
            {/* Melhorar essa parte da data */}
          </Author>
          {
            data.movie_tags &&
            <Tags>
              {
                data.movie_tags.map(tag => (
                  <Tag 
                    key={String(tag.id)}
                    title={tag.name} 
                  />
                ))
              }
            </Tags>
          }
          <p>
            {data.description}
          </p>
        </Section>
      }
    </Container>
  );
}
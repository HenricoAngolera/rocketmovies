import { AiOutlinePlus } from 'react-icons/ai';

import { Container, Content, TitlePage, ButtonBox, Notes } from "./styles";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button"
import { MovieNote } from '../../components/MovieNote';

export function Home() {
  return(
    <Container>
      <Header />
        <TitlePage>
          <h1>Meus filmes</h1>
          <ButtonBox>
            <Button title="Adicionar Filme" icon={AiOutlinePlus}/>
          </ButtonBox>
        </TitlePage>
      <Content>
        <Notes>
          <MovieNote 
            data= {{
              title: "Guardiões da Galaxia",
              grade: 4,
              description: "O aventureiro do espaço Peter Quill torna-se presa de caçadores de recompensas depois que rouba a esfera de um vilão traiçoeiro, Ronan. Para escapar do perigo, ele faz uma aliança com um grupo de quatro extraterrestres. Quando Quill descobre que a esfera roubada possui um poder capaz de mudar os rumos do universo, ele e seu grupo deverão proteger o objeto para salvar o futuro da galáxia.",
              tags: [
                {id: 1, name: 'ação'},
                {id: 2, name: 'aventura'},
              ]
            }}
            />
            <MovieNote 
            data= {{
              title: "Guardiões da Galaxia",
              grade: 4,
              description: "O aventureiro do espaço Peter Quill torna-se presa de caçadores de recompensas depois que rouba a esfera de um vilão traiçoeiro, Ronan. Para escapar do perigo, ele faz uma aliança com um grupo de quatro extraterrestres. Quando Quill descobre que a esfera roubada possui um poder capaz de mudar os rumos do universo, ele e seu grupo deverão proteger o objeto para salvar o futuro da galáxia.",
              tags: [
                {id: 1, name: 'ação'},
                {id: 2, name: 'aventura'},
              ]
            }}
            />
          </Notes>
      </Content>
    </Container>
  );
}
import { AiOutlineClockCircle } from 'react-icons/ai';

import { Container, Author, Tags } from "./styles";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";

export function Details() {
  return(
    <Container>
      <Header />
      <Section title="Guardiões da Galaxia" stars="4">
        <Author>
          <img src="https://github.com/HenricoAngolera.png" alt="Imagem do usuário" />
          <span className='author'>Por Henrico Angolera</span>
          <AiOutlineClockCircle />
          <span className='time'>23/05/22 às 08:00</span>
        </Author>
        <Tags>
          <Tag id="1" title="ação" />
          <Tag id="2" title="aventura" />
        </Tags>
        <p>
          O aventureiro do espaço Peter Quill torna-se presa de caçadores de recompensas depois que rouba a esfera de um vilão traiçoeiro, Ronan. Para escapar do perigo, ele faz uma aliança com um grupo de quatro extraterrestres. Quando Quill descobre que a esfera roubada possui um poder capaz de mudar os rumos do universo, ele e seu grupo deverão proteger o objeto para salvar o futuro da galáxia. 
          <br/> 
          <br/> 
          O aventureiro do espaço Peter Quill torna-se presa de caçadores de recompensas depois que rouba a esfera de um vilão traiçoeiro, Ronan. Para escapar do perigo, ele faz uma aliança com um grupo de quatro extraterrestres. Quando Quill descobre que a esfera roubada possui um poder capaz de mudar os rumos do universo, ele e seu grupo deverão proteger o objeto para salvar o futuro da galáxia. 
          <br/> 
          <br/> 
          O aventureiro do espaço Peter Quill torna-se presa de caçadores de recompensas depois que rouba a esfera de um vilão traiçoeiro, Ronan. Para escapar do perigo, ele faz uma aliança com um grupo de quatro extraterrestres. Quando Quill descobre que a esfera roubada possui um poder capaz de mudar os rumos do universo, ele e seu grupo deverão proteger o objeto para salvar o futuro da galáxia. 
          <br/> 
          <br/> 
          O aventureiro do espaço Peter Quill torna-se presa de caçadores de recompensas depois que rouba a esfera de um vilão traiçoeiro, Ronan. Para escapar do perigo, ele faz uma aliança com um grupo de quatro extraterrestres. Quando Quill descobre que a esfera roubada possui um poder capaz de mudar os rumos do universo, ele e seu grupo deverão proteger o objeto para salvar o futuro da galáxia. 
          
        </p>
      </Section>
    </Container>
  );
}
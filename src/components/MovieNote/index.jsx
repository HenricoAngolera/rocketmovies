import { Container } from "./styles";

import { Rating } from '../Rating';
import { Tag } from '../Tag';

export function MovieNote({data, ...rest}){
  return(
    <Container {...rest}>
      <h3>{data.title}</h3>
      <Rating grade={data.rating}/>
      <p> {data.description} </p>
      { data.tags && 
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
          }  
        </footer>
      }
    </Container>
  );
}
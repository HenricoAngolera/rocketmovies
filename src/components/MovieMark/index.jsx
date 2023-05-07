import { FiPlus, FiX } from 'react-icons/fi';

import { Container } from './styles';

export function MovieMark({ isNew, value, onClick, ...rest}) {

  return (
    <Container isNew={isNew}>
      <input 
        type='text'
        value={value}
        size={value}
        readOnly={!isNew}
        {...rest}  
      />

      <button
        type="button"
        onClick={onClick}
        className="pink-icon"
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
}
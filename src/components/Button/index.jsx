import { Container } from "./styles";

export function Button({ title, isBlack, loading = false, ...rest}) {
  return (
    <Container 
      type="button"
      disabled={loading}
      className={isBlack ? "black-button" : ""}
      {...rest}
    >
      {loading ? 'Carregando...' : title}
    </Container>
  );
}
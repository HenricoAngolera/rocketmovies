import { Container } from "./styles";

export function Button({ title, isBlack, loading = false, icon: Icon, ...rest}) {
  return (
    <Container 
      type="button"
      disabled={loading}
      className={isBlack ? "black-button" : ""}
      {...rest}
    >
      {Icon && <Icon size={20} />}
      {loading ? 'Carregando...' : title}
    </Container>
  );
}
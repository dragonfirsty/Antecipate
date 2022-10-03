import { Container } from "./styles";

const Input = ({ label, error, change, name, ...rest }) => {
  return (
    <Container>
      <div>{label}</div>
      <input {...rest} />
      {!!error && <p className="error">{error}</p>}
    </Container>
  );
};

export default Input;

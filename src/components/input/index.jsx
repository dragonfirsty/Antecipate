import { Container } from "./styles";

const Input = ({ label, span, name, ...rest }) => {
  return (
    <Container>
      <div>{label}</div>
      <input {...rest} />
      <span>{span}</span>
    </Container>
  );
};

export default Input;

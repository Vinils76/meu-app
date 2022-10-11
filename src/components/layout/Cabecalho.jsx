import styled from "styled-components";
import Menu from "../Menu";

/* Tagged template */
const StyledCabecalho = styled.header`
  background-color: ${periodo === "diurno" ? "lightblue" : "darkblue"};
  text-align: center;

  h1 {
    color: red;
  }

  p {
    font-weight: bold;
    color: blue;
    font-size: 2rem;

    &:hover {
      color: red;
      cursor: pointer;
    }
  }
`;

const Cabecalho = () => {
  return (
    <StyledCabecalho>
      <h1>Interface React</h1>
      <Menu />
      <p>Teste</p>
    </StyledCabecalho>
  );
};

export default Cabecalho;

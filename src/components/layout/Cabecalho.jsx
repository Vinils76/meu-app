import { useState } from "react";
import Menu from "../Menu";

const Cabecalho = () => {
  const exemplo2 = () => {
    console.log("exemplo2");
  };

  /* gerenciamento de state, aqui definimos no usestate um valor inicial colocado entre parenteses do useState. além de desestruturar o state em uma váriavel (titulo) e em uma função (setTitulo) que será responsável por atualizar este steate/titulo */
  const [titulo, setTitulo] = useState("Exemplo do state");

  const atualizaTitulo = () => {
    setTitulo("Opa, state do titulo foi alterado");
  };

  return (
    <header>
      <button onClick={() => console.log("exemplo1")}>Exemplo 1</button>
      <button onClick={exemplo2}>Exemplo 2</button>
      <hr />
      <h1 onClick={atualizaTitulo}>{titulo}</h1>
      <Menu />
    </header>
  );
};

export default Cabecalho;

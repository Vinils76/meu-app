import Artigo from "../Artigo";
import "./Conteudo.css";

const Conteudo = () => {
  return (
    <main>
      <section>
        <h2 className="subtitulo">Conteúdo do site</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          laboriosam totam fuga sed voluptatibus quasi error amet provident
          quaerat, rerum libero vitae doloribus sequi suscipit. Consequatur
          similique eligendi unde quaerat!
        </p>

        <Artigo />
        <Artigo />
        <Artigo />
      </section>
    </main>
  );
};

export default Conteudo;

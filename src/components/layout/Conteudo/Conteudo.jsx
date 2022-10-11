import Artigo from "../../Artigo";
import estilos from "./Conteudo.module.css";

const Conteudo = () => {
  return (
    <main>
      <section>
        <h2 className={estilos.subtitulo}>Conteúdo do site</h2>
        <p>
          <span className={`${estilos.destaque} ${estilos.sombra}`}>
            Lorem{" "}
          </span>
          dolor sit amet consectetur adipisicing elit. Voluptates, laboriosam
          totam fuga sed voluptatibus quasi error amet provident quaerat, rerum
          libero vitae doloribus sequi suscipit. Consequatur similique eligendi
          unde quaerat!
        </p>

        <Artigo />
        <Artigo />
        <Artigo />
      </section>
    </main>
  );
};

export default Conteudo;

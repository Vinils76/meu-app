import Artigo from "../Artigo";

const cursos = ["HTML5", "CSS", "REACT"];

const Conteudo = () => {
  return (
    <main>
      <section>
        <h2>Conteúdo do site</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          laboriosam totam fuga sed voluptatibus quasi error amet provident
          quaerat, rerum libero vitae doloribus sequi suscipit. Consequatur
          similique eligendi unde quaerat!
        </p>

        <Artigo
          titulo="Artigo1"
          subtitulo="Subtitulo do artigo 1"
          curso={cursos[0]}
        >
          Texto do primeiro artigo
        </Artigo>
        <Artigo
          titulo="Artigo2"
          subtitulo="Subtitulo do artigo 2"
          curso={cursos[1]}
        >
          Texto do segundo artigo
        </Artigo>
        <Artigo
          titulo="Artigo3"
          subtitulo="Subtitulo do artigo 3"
          curso={cursos[2]}
        >
          Texto do terceiro artigo
        </Artigo>
      </section>
    </main>
  );
};

export default Conteudo;

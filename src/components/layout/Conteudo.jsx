import Artigo from "../Artigo";

const cursos = ["HTML5", "CSS", "REACT"];

const Conteudo = () => {
  const artigos = [
    {
      id: 1,
      titulo: "Artigo 1",
      subtitulo: "Esse é o subtitulo do artigo 1",
      texto: "Este é o conteúdo",
      curso: "Js avançado",
    },

    {
      id: 2,
      titulo: "Artigo 2",
      subtitulo: "Esse é o subtitulo do artigo 2",
      texto: "Este é o conteúdo",
      curso: "React",
    },

    {
      id: 3,
      titulo: "Artigo 3",
      subtitulo: "Esse é o subtitulo do artigo 3",
      texto: "Este é o conteúdo",
      curso: "Node.js",
    },
  ];

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

        {artigos.map((artigo) => (
          <Artigo
            key={artigo.id}
            titulo={artigo.titulo}
            subtitulo={artigo.subtitulo}
            curso={artigo.curso}
          >
            {artigo.texto}
          </Artigo>
        ))}
      </section>
    </main>
  );
};

export default Conteudo;

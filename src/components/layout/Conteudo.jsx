import Artigo from "../Artigo";

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

        <Artigo>Texto do primeiro artigo</Artigo>
        <Artigo>Texto do segundo artigo</Artigo>
        <Artigo>Texto do terceiro artigo</Artigo>
      </section>
    </main>
  );
};

export default Conteudo;

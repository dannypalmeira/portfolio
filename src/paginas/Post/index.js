import "./Post.css";
import styles from "./Post.module.css";
import ReactMarkdown from "react-markdown";
import { Routes, Route, useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "componentes/PostModelo";
import NaoEncontrada from "paginas/NaoEncontrada";
import PostCard from "componentes/PostCard";

export default function Post() {
  const parametros = useParams();

  const post = posts.find((post) => {
    return post.id === Number(parametros.id);
  });

  if (!post) {
    return <NaoEncontrada />;
  }

  const postsRecomendados = posts
    .filter((post) => post.id !== Number(parametros.id))
    .sort((a, b) => b.id - a.id)
    .slice(0, 4);

  return (
    <Routes>      
        <Route
          index
          element={
            <PostModelo
              fotoCapa={`/assets/posts/${post.id}/capa.png`}
              titulo={post.titulo}
            >
              <div className="post-markdown-container">
                <ReactMarkdown>{post.texto}</ReactMarkdown>
              </div>
              <hr />
              <h2 className={styles.tituloOutrosPosts}>Scopri altri progetti</h2>
              <ul className={styles.postsRecomendados}>{postsRecomendados.map((post) => (
                <li key={post.id}>
                  <PostCard post={post} />
                </li>
              ))}</ul>
            </PostModelo>
          }
        />
    </Routes>
  );
}

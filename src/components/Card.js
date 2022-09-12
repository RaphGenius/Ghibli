import { useState } from "react";

export default function Card({ movie }) {
  //state
  const [viewMovie, setViewMovie] = useState([]);

  // Comportement
  const getLs = () => {
    const lsContent = localStorage.getItem("movie");
    if (lsContent) {
      return JSON.parse(localStorage.getItem("movie"));
    } else {
      return [];
    }
  };
  const handleView = (id) => {
    const movieInLs = getLs();
    if (movieInLs.includes(id)) {
      const newMovie = movieInLs.filter((id) => movieInLs !== id);
      setViewMovie(newMovie);
      return localStorage.setItem("movie", JSON.stringify(newMovie));
    }
    movieInLs.push(id);
    localStorage.setItem("movie", JSON.stringify(movieInLs));
  };
  //Render
  return (
    <div
      className={
        viewMovie.includes(movie.id) ? "container bg_other" : "container"
      }
    >
      <div className="card front">
        <div className="img-container">
          <img
            className="__img"
            src={movie.image}
            key={movie.id}
            alt={"Affiche de" + movie.title}
          ></img>
        </div>
        <div className="movie_title">
          <p className="__title">{movie.title} </p>
          <span>{movie.release_date} </span>
        </div>
      </div>
      <div className="card back">
        <div className="container-check">
          <label htmlFor="dejavue">
            <input id="dejavue" className="dejavueCheckbox" type="checkbox" />
          </label>
        </div>

        <div className="container container_back">
          <div className="movie_title">
            <p className="__title">{movie.title} </p>
            <p className="__title">{movie.original_title} </p>
          </div>
          <div className="description">
            <p>Sortie en {movie.release_date} </p>
            <p>
              Résumé : <br /> {movie.description}{" "}
            </p>
          </div>
          <div className="btn-part">
            <button className="btn">En savoir plus</button>
            <button className="btn" onClick={() => handleView(movie.id)}>
              Déjà vue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

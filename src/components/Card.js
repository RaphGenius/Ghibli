export default function Card({ movie }) {
  return (
    <div className="container">
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
        </div>
      </div>
      <div className="card back">
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
            <button className="btn">Ajouter à ma liste</button>
          </div>
        </div>
      </div>
    </div>
  );
}

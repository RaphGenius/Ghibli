export default function Card({ movie }) {
  return (
    <div className="Fullcard">
      <div className="container-img">
        <img
          className="__img"
          src={movie.image}
          key={movie.id}
          alt={"Affiche de" + movie.title}
        ></img>
      </div>
      <div className="container-title">
        <p className="__title">{movie.title} </p>
        <p className="__releasedate">Sortie en {movie.release_date} </p>
      </div>
      <div className="description">
        <p>{movie.description} </p>
      </div>
    </div>
  );
}

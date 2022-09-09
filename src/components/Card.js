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
        <div className="description">
          <p>{movie.description} </p>
        </div>
      </div>
    </div>
  );
}

/*     <div className="Fullcard">
      <div className="face front">
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
        </div>
      </div>
    </div> */

//CARTE QUI RETOURNE QUI MARCHE
/*     <div className="container">
    <div className="card front">
      Front
      <h1>Salut</h1>
    </div>
    <div className="card back">Back</div>
  </div> */

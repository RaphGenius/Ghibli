import { useEffect, useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
const axios = require("axios").default;

function App() {
  //State
  const [movies, setMovies] = useState([]);
  // Comportement
  useEffect(() => {
    axios.get("https://ghibliapi.herokuapp.com/films").then((res) => {
      console.log(res.data);
      setMovies(res.data);
    });
  }, []);
  //Render
  return (
    <div>
      <Header />
      <div className="container-card">
        {movies.map((movie) => (
          <Card movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default App;

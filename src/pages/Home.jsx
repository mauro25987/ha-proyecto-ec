import axios from "axios";
import { useEffect, useState } from "react";
const Home = () => {
  const apiKey = import.meta.env.VITE_API_KEY;

  const [movies, setMovies] = useState([]);
  // const [filteredMovies, setFilteredMovies] = useState([]);

  const fetchMovies = () => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/popular",
      params: { language: "en-US", page: "1" },
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    };
    axios
      .request(options)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="main-contain">
      <section>
        <h2>Popular-Movie</h2>
        <div className="movie-list">
          {movies.map((movie) => (
            <div key={movie.id} className="movie-cards">
              <img
                src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`}
                alt={movie.title}
                className="movie-image"
              />
              <h2 className="movie-title">{movie.title}</h2>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

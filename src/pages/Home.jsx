import { useEffect, useState } from "react"
import { fetchMovies } from "../api/tmdb"
import MovieCard from "../components/MovieCard"
// import { FaShoppingCart } from "react-icons/fa"
const Home = () => {
  const [movies, setMovies] = useState({
    popular: [],
    top_rated: [],
    now_playing: [],
    upcoming: [],
  })
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleFetchMovie = async () => {
    setLoading(true)
    const { data, error } = await fetchMovies()
    if (data) {
      setMovies(data)
    }
    if (error) {
      setError(error)
    }
    setLoading(false)
  }

  useEffect(() => {
    handleFetchMovie()
  }, [])

  if (loading) {
    return <div>Cargando peliculas...</div>
  }

  return (
    <div className="main-contain">
      {console.log(movies.popular)}
      <section>
        <h2 className="cart">Peliculas Populares</h2>
        <div className="movie-list">
          {movies.popular.map(movie => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
        <h2 className="cart">Peliculas Mejor Calificadas</h2>
        <div className="movie-list">
          {movies.top_rated.map(movie => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
        <h2 className="cart">Now Playing</h2>
        <div className="movie-list">
          {movies.now_playing.map(movie => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
        <h2 className="cart">Estrenos</h2>
        <div className="movie-list">
          {movies.upcoming.map(movie => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </section>
      {error && <div>{error}</div>}
    </div>
  )
}

export default Home

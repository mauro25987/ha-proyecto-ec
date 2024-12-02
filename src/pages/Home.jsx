import { useEffect, useState } from "react"
import { fetchMovies, searchMovie } from "../api/tmdb"
import { MovieCard, MovieCardSearch } from "../components/index"

const Home = () => {
  const [movies, setMovies] = useState({
    popular: [],
    top_rated: [],
    now_playing: [],
    upcoming: [],
  })
  const [moviesSearch, setMoviesSearch] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState("")

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

  const handleSearchMovie = async () => {
    if (!search.trim()) return
    setLoading(true)
    const { data, error } = await searchMovie(search)
    if (data) {
      setMoviesSearch(data)
    }
    if (error) {
      setError(error)
    }
    setLoading(false)
  }

  const handleSearch = e => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    setTimeout(() => handleSearchMovie(), 2000)
  }, [search])

  useEffect(() => {
    handleFetchMovie()
  }, [])

  if (loading) {
    return <div>Cargando peliculas...</div>
  }

  return (
    <div className="main-contain">
      <section>
        <div>
          <label htmlFor="search"></label>
          <input
            type="text"
            id="search"
            name="search"
            value={search}
            onChange={handleSearch}
            placeholder="Busca una pelicula"
          />
        </div>
      </section>
      {search.length > 0 ? (
        <section>
          <h2>Peliculas encontradas</h2>
          <div className="movie-list">
            {moviesSearch.map(movie => (
              <MovieCardSearch movie={movie} key={movie.id} />
            ))}
          </div>
        </section>
      ) : (
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
      )}
      {error && <div>{error}</div>}
    </div>
  )
}

export default Home

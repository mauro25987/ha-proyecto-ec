import { useEffect, useState } from "react"
import { fetchMovies } from "../api/tmdb"
import MovieCard from "../components/MovieCard"
// import { FaShoppingCart } from "react-icons/fa"
const Home = () => {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState("")
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
      <section>
        <h2 className="cart">Popular-Movie</h2>
        <div className="movie-list">
          {movies.map(movie => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </section>
      {error && <div>{error}</div>}
    </div>
  )
}

export default Home

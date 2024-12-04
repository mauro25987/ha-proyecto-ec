import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { fetchMovie } from "../api/tmdb"
import { addItemCart } from "../reducer/cartSlice"

function Movie() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [selectedMovie, setSelectedMovie] = useState({})

  const handleAddCart = () => {
    dispatch(
      addItemCart({
        id: selectedMovie.id,
        title: selectedMovie.title,
        image: selectedMovie.poster_path,
      })
    )
    navigate("/")
  }

  const handleFetchMovie = async () => {
    setLoading(true)
    const { data, error } = await fetchMovie(id)
    if (data) {
      const { release_date, title, overview, backdrop_path, poster_path, genres, runtime } = data
      setSelectedMovie({
        id,
        title,
        release_date,
        overview,
        backdrop_path,
        poster_path,
        genres: genres[0].name,
        runtime,
      })
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
    return <div>Cargando pelicula...</div>
  }

  return (
    <div>
      <div
        className="content"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${selectedMovie.backdrop_path})`,
        }}
      ></div>
      <div className="movie-info">
        <h2>{selectedMovie.title}</h2>
        <div className="info d-flex justify-content-around">
          <p>{selectedMovie.release_date}</p>
          <p>{selectedMovie.genres}</p>
          <p>
            {`${Math.floor(selectedMovie.runtime / 60)}h  ${selectedMovie.runtime % 60}m 
            `}
          </p>
        </div>

        <p>{selectedMovie.overview}</p>

        <button className="button" onClick={handleAddCart}>
          Añadir al carrito
        </button>
      </div>
      {error && <div>{error}</div>}
    </div>
  )
}

export default Movie

import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { addItemCart } from "../reducer/cartSlice"

function Movie() {
  const apiKey = import.meta.env.VITE_API_KEY

  const dispatch = useDispatch()
  const { id } = useParams()
  const [selectedMovie, setSelectedMovie] = useState([])

  const handleAddCart = () => {
    dispatch(
      addItemCart({
        id: selectedMovie.id,
        title: selectedMovie.title,
        image: selectedMovie.poster_path,
      })
    )
  }

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${id}`,
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    }
    axios
      .request(options)
      .then(res => setSelectedMovie(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
      <div
        className="content"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${selectedMovie.backdrop_path})`,
        }}
      ></div>
      <div className="movie-info">
        <h2
          style={{
            marginTop: "80px",
          }}
        >
          {selectedMovie.title}
        </h2>

        <p>{selectedMovie.release_date}</p>
        <p>{selectedMovie.overview}</p>
        <button className="button" onClick={handleAddCart}>
          Añadir al carrito
        </button>
      </div>
    </div>
  )
}

export default Movie

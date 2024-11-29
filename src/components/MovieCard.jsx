import { Link, useNavigate } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa"
import { addItemCart } from "../reducer/cartSlice"
import { useDispatch } from "react-redux"

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { title, id, poster_path } = movie
  const handleAddCart = () => {
    dispatch(
      addItemCart({
        id: movie.id,
        title: movie.title,
        image: movie.poster_path,
      })
    )
    navigate("/")
  }

  return (
    <div className="movie-cards">
      <h2 className="movie-title">{title}</h2>
      <Link to={`movie/${id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${poster_path}`}
          alt={title}
          className="movie-image"
          style={{ cursor: "pointer" }}
        />
      </Link>

      <button className="cart-home" onClick={handleAddCart}>
        Añadir al carrito
        <FaShoppingCart />
      </button>
    </div>
  )
}
export default MovieCard

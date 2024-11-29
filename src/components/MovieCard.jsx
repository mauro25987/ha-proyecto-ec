import { Link } from "react-router-dom"

const MovieCard = ({ movie }) => {
  const { title, id, poster_path } = movie
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
    </div>
  )
}
export default MovieCard

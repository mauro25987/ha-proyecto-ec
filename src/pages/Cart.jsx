import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { removeItemCart } from "../reducer/cartSlice"
import "../components/Layout.css"

const Cart = () => {
  const cart = useSelector(state => state.cart)
  console.log(cart.length)
  // llamada a la api privad obtener precio unico de pelicula, multiplico por longitud del array, obtengo precio total

  const dispatch = useDispatch()
  const handleRemoveFromCart = id => {
    dispatch(removeItemCart(id))
  }

  return (
    <div className="main-contain">
      <h1 className="cart">Carrito</h1>
      <hr />
      <div className="movie-list">
        {cart.length === 0 ? (
          <h2 className="cart">El carrito se encuentra actualmente vacio</h2>
        ) : (
          cart.map(movie => (
            <div key={movie.id} className="movie-cart">
              <p>{movie.title}</p>
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.image}`}
                alt=""
                className="movie-image"
              />
              <button onClick={() => handleRemoveFromCart(movie.id)}>Eliminar del carrito</button>
              <br />
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Cart

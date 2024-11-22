import { useSelector } from "react-redux"

const Cart = () => {
  const cart = useSelector(state => state.cart)
  console.log(cart.lenght)
  // llamada a la api privad obtener precio unico de pelicula, multiplico por longitud del array, obtengo precio total

  return (
    <div>
      <h1>Carrito</h1>
      {cart.lenght === 0 ? (
        <h2>El carrito se encuentra actualmente vacio</h2>
      ) : (
        cart.map(movie => (
          <div>
            <p>{movie.title}</p>
            <img
              style={{
                height: 300,
                width: 300,
              }}
              src={`https://image.tmdb.org/t/p/original/${movie.image}`}
              alt=""
            />
            <button>Eliminar del carrito</button>
            <br />
          </div>
        ))
      )}
    </div>
  )
}

export default Cart

import { useSelector } from "react-redux"

const Cart = () => {
  const cart = useSelector(state => state.cart)
  console.log(cart.lenght)
  // llamada a la api privad obtener precio unico de pelicula, multiplico por longitud del array, obtengo precio total

  return (
    <div>
      <h1>Carrito</h1>

      <div>
        <h2>{cart.payload.title}</h2>
        <img src={cart.payload.image} alt="" />
      </div>

      {/* {cart.lenght === 0 ? "carrito vacio" : cart.map(movie => <div>movie.id, movie.image</div>)} */}
    </div>
  )
}

export default Cart

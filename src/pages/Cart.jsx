import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import "../components/Layout.css"
import { removeItemCart } from "../reducer/cartSlice"

const Cart = () => {
  const cart = useSelector(state => state.cart)
  console.log(cart.length)
  const [price, setPrice] = useState(0)

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await axios.get("https://ha-videoclub-api-g2.vercel.app/prices", {
          params: { price_id: 2 },
        })
        setPrice(response.data.pricing[1].price)
      } catch (error) {
        console.error("Error al obtener el precio:", error)
      }
    }
    fetchPrice()
  }, [])

  const totalPrice = price * cart.length

  const dispatch = useDispatch()
  const handleRemoveFromCart = idCart => {
    dispatch(removeItemCart(idCart))
  }

  return (
    <div className="main-contain">
      <h1 className="cart">Carrito</h1>
      <h4 className="cart">Precio total: {totalPrice}</h4>
      <hr />
      <div className="movie-list">
        {cart.length === 0 ? (
          <h2 className="cart">El carrito se encuentra actualmente vacio</h2>
        ) : (
          cart.map(movie => (
            <div key={movie.idCart} className="movie-cart">
              <h3>{movie.title}</h3>
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.image}`}
                alt=""
                className="movie-image"
              />
              <button onClick={() => handleRemoveFromCart(movie.idCart)}>
                Eliminar del carrito
              </button>
              <br />
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Cart

import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { removeItemCart } from "../reducer/cartSlice"
import { useState, useEffect } from "react"
import axios from "axios"
import "../components/Layout.css"

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
              <h3>{movie.title}</h3>
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
        <h4>Precio total: {totalPrice}</h4>
      </div>
    </div>
  )
}

export default Cart

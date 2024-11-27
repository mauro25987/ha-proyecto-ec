import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import "../components/Layout.css"
import { removeItemCart } from "../reducer/cartSlice"
import { Link } from "react-router-dom"

const Cart = () => {
  const cart = useSelector(state => state.cart)
  const { token, userId } = useSelector(state => state.auth)
  const auth = useSelector(state => state.auth)
  const cartItems = useSelector(state => state.cart)
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

  const totalPrice = price * cartItems.length

  const dispatch = useDispatch()
  const handleRemoveFromCart = idCart => {
    dispatch(removeItemCart(idCart))
  }

  const handleSendOrder = async () => {
    try {
      const response = await axios({
        method: "POST",
        baseURL: urlVercel,
        url: `/orders`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: {
          userId,
          items: cart.map(item => ({
            movieId: item.idCart,
            title: item.title,
            quantity: 1,
          })),
          total: totalPrice,
          date: new Date().toISOString(),
        },
      })

      if (response.status === 200) {
      }
    } catch (error) {
      setError("", error)
    }
  }

  return (
    <div className="main-contain">
      <h1 className="cart">Carrito</h1>
      <h4 className="cart">Precio total: {totalPrice}</h4>
      {cartItems.length !== 0 && (
        <Link to="/order">
          <button className="cart" onClick={handleSendOrder}>
            Finalizar compra
          </button>
        </Link>
      )}
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

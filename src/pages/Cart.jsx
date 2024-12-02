import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPrice } from "../api/vercel"
import { ModalCheckout, ModalLogin } from "../components/index"
import "../components/Layout.css"
import { removeItemCart } from "../reducer/cartSlice"

const Cart = () => {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const { isAuthenticated } = useSelector(state => state.auth)
  const [priceItem, setPriceItem] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [showModaLogin, SetShowModaLogin] = useState(false)
  const [showModalCheckout, setShowModalCheckout] = useState(false)

  const handleFetchPrice = async () => {
    setLoading(true)
    const { data, error } = await fetchPrice()
    if (data) {
      setPriceItem(parseInt(data))
    }
    if (error) {
      setError(error)
    }
    setLoading(false)
  }

  const handleRemoveFromCart = idCart => {
    dispatch(removeItemCart(idCart))
  }

  const handleBackToCart = () => {
    SetShowModaLogin(!showModaLogin)
  }

  const handleShowModalCheckout = () => {
    if (isAuthenticated) {
      console.log("compraste")
      setShowModalCheckout(!showModalCheckout)
    } else {
      console.log("logueate")
      SetShowModaLogin(!showModaLogin)
    }
  }

  useEffect(() => {
    handleFetchPrice()
  }, [])

  useEffect(() => {
    setTotalPrice(cart.length * priceItem)
  }, [cart, priceItem])

  if (loading) {
    return <div>Cargndo el carrito...</div>
  }

  return (
    <div className="main-contain">
      <h1 className="cart">Carrito</h1>

      <hr />

      <div className="movie-list">
        {cart.length === 0 ? (
          <h2 className="cart">El carrito se encuentra actualmente vacio</h2>
        ) : (
          <>
            <h4 className="cart">Precio total: {totalPrice}</h4>
            {cart.map(movie => (
              <div key={movie.idCart} className="movie-cart">
                <h3>{movie.title}</h3>
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie.image}`}
                  alt=""
                  className="movie-image"
                />
                <button className="button" onClick={() => handleRemoveFromCart(movie.idCart)}>
                  Eliminar del carrito
                </button>
                <br />
              </div>
            ))}
            <button className="cart" onClick={handleShowModalCheckout}>
              Comprar
            </button>
          </>
        )}
      </div>

      {showModaLogin && (
        <ModalLogin
          showModaLogin={showModaLogin}
          SetShowModaLogin={SetShowModaLogin}
          handleBackToCart={handleBackToCart}
        />
      )}

      {showModalCheckout && <ModalCheckout />}

      {error && <div>{error}</div>}
    </div>
  )
}

export default Cart

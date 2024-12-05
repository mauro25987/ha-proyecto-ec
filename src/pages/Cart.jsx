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
      <h1 className="cart">Carrito de Compras</h1>

      <h4 className="cart">Precio Total: {totalPrice}</h4>

      <button onClick={handleShowModalCheckout} className="modal-buy">
        Finalizar Compra
      </button>
      <hr />

      <div className="movie-list">
        {cart.length === 0 ? (
          <h2 className="cart">El carrito se encuentra actualmente vacío</h2>
        ) : (
          <>
            {cart.map(movie => (
              <div key={movie.idCart} className="movie-cart">
                <h3 className="title">{movie.title}</h3>
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie.image}`}
                  alt=""
                  className="movie-image"
                />
                <button
                  className="button-delete"
                  onClick={() => handleRemoveFromCart(movie.idCart)}
                >
                  Eliminar del carrito
                </button>
                <br />
              </div>
            ))}
          </>
        )}
      </div>

      {showModaLogin && (
        <ModalLogin showModaLogin={showModaLogin} SetShowModaLogin={SetShowModaLogin} />
      )}

      {showModalCheckout && <ModalCheckout />}

      {error && <div>{error}</div>}
    </div>
  )
}

export default Cart

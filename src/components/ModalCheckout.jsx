import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { sendOrder } from "../api/vercel"
import { clearCart } from "../reducer/cartSlice"

const ModalCheckout = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const { token } = useSelector(state => state.auth)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [payMethod, setPayMethod] = useState("visa")

  const handleSendOrder = async e => {
    e.preventDefault()
    setLoading(true)
    const order = { type: "movie", data: cart }
    const { data, error } = await sendOrder(token, order)
    if (data) {
      dispatch(clearCart())
      navigate("/")
    }
    if (error) {
      setError(error)
    }
    setLoading(false)
  }

  const handleSetPayMethod = e => {
    setPayMethod(e.target.value)
  }

  if (loading) {
    return <div>Mandando la orden...</div>
  }

  return (
    <div>
      ModalCheckout
      <form onSubmit={handleSendOrder}>
        <div>Medios de pago:</div>
        <div>
          <label htmlFor="visa">Visa</label>
          <input
            type="radio"
            id="visa"
            name="pay"
            value="visa"
            onChange={handleSetPayMethod}
            checked={payMethod === "visa"}
          />
        </div>
        <div>
          <label htmlFor="master">Master Card</label>
          <input
            type="radio"
            id="master"
            name="pay"
            value="master"
            onChange={handleSetPayMethod}
            checked={payMethod === "master"}
          />
        </div>
        <div>
          <label htmlFor="mercadopago">Mercado Pago</label>
          <input
            type="radio"
            id="mercadopago"
            name="pay"
            value="mercadopago"
            onChange={handleSetPayMethod}
            checked={payMethod === "mercadopago"}
          />
        </div>
        <div>
          <button>Comprar</button>
        </div>
      </form>
      {error && <div>{error}</div>}
    </div>
  )
}

export default ModalCheckout

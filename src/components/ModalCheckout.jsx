import { useState } from "react"
import { useSelector } from "react-redux"
import { sendOrder } from "../api/vercel"

const ModalCheckout = () => {
  const cart = useSelector(state => state.cart)
  const { token, isAuthenticated } = useSelector(state => state.auth)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [order, setOrder] = useState([])

  const handleSendOrder = async () => {
    setLoading(true)
    const { data, error } = await sendOrder(token, cart)
    if (data) {
      console.log(data)
    }
    if (error) {
      setError(error)
    }
    setLoading(false)
  }

  if (loading) {
    return <div>Mandando la orden...</div>
  }

  return (
    <div>
      ModalCheckout
      {error && <div>{error}</div>}
    </div>
  )
}

export default ModalCheckout

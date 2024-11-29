import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import config from "../api/vercel"

const Order = () => {
  const [orders, setOrders] = useState([])
  const { token } = useSelector(state => state.auth)
  const { urlVercel } = config
  const [error, setError] = useState(null)

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`${urlVercel}/orders`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      if (response.data) {
        setOrders(response.data)
      }
    } catch (error) {
      console.error("Error al recibir las órdenes:", error)
      setError("No se han recibido los datos de la orden con éxito.")
    }
  }
  console.log(orders)

  useEffect(() => {
    fetchOrders()
  }, [urlVercel, token])

  return (
    <div>
      <h1>Órdenes</h1>
      {error && <p className="error">{error}</p>}
      {orders.length === 0 ? (
        <p>No hay órdenes disponibles</p>
      ) : (
        orders.map(order => (
          <div key={order.order_id}>
            <h3>Orden #{order.order_id}</h3>
            <p>Fecha: {new Date(order.createdAt).toLocaleDateString()}</p>
            <h4>Películas:</h4>
            <ul>
              {order.data.map(movie => (
                <li key={movie.movie_id}>{movie.title || "Título no disponible"}</li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  )
}

export default Order

import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
const Order = () => {
  const [orders, setOrder] = useState([])
  console.log(orders)
  const token = useSelector(state => state.auth.token)
  const urlVercel = "https://ha-videoclub-api-g2.vercel.app"
  const [error, setError] = useState(null)

  const handleRecieveOrder = async () => {
    try {
      const response = await axios({
        method: "GET",
        baseURL: urlVercel,
        url: `/orders`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      if (response.status === 200) {
        console.log(response)
        setOrder(response.data.orders)
      }
    } catch (error) {
      setError("No se han recibido los datos de la orden con exito", error)
    }
  }

  useEffect(() => {
    handleRecieveOrder()
  }, [])

  return (
    <div>
      <h1>Órdenes:</h1>
      <div>
        {orders.map(order => (
          <div key={order.id}>
            <h3>Orden #{order.id}</h3>
            <p>Fecha: {new Date(order.date).toLocaleDateString()}</p>
            <p>Total: ${order.total}</p>
            <h4>Películas:</h4>
            <ul>
              {order.items.map(item => (
                <li key={item.movieId}>
                  {item.title} - Cantidad: {item.quantity}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Order

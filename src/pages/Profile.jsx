import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import config from "../api/vercel"

const Profile = () => {
  const { token, userId } = useSelector(state => state.auth)
  const { urlVercel } = config

  const [error, setError] = useState(null)
  const [user, setUser] = useState(null)

  const fetchProfile = async () => {
    try {
      const response = await axios({
        method: "GET",
        baseURL: urlVercel,
        url: `/users/${userId}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      if (response.status === 200) {
        const { address, createdAt, email, firstname, lastname, orders, phone, updateAt } =
          response.data
        setUser({ address, createdAt, email, firstname, lastname, orders, phone, updateAt })
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          setError("Error: No autorizado, por favor inicie sesión")
        } else {
          setError(`Error: ${error.response.data.message || "Algo salió mal"}`)
        }
      } else {
        setError("Error: Problema de conexion, intente mas tarde")
      }
    }
  }

  useEffect(() => {
    fetchProfile()
    console.log(user)
  }, [])

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Perfil</h1>
      <button style={{ padding: "10px 20px", backgroundColor: "", color: "white" }}>
        Editar Perfil
      </button>
    </div>
  )
}

export default Profile

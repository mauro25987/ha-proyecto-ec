import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import config from "../api/vercel"
import "../components/Layout.css"

const Register = () => {
  const navigate = useNavigate()
  //const [response, setResponse] = useState(null)
  const { urlVercel } = config

  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    address: "",
    phone: "",
    email: "",
    password: "",
  })

  const handleUser = e => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const response = await axios({
        method: "POST",
        baseURL: urlVercel,
        url: "/users",
        headers: {
          "Content-Type": "application/json",
        },
        data: user,
      })
      if (response.status === 200) {
        console.log(response)
        navigate("/")
      }
    } catch (error) {
      console.log("Error:", error)
    }
  }

  return (
    <form className="form-register" onSubmit={handleSubmit}>
      <h3 className="form">Registro de usuario:</h3>
      <div className="form">
        <label htmlFor="firstname">Nombre</label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          value={user.firstname}
          onChange={handleUser}
          required
        />
      </div>
      <div className="form">
        <label htmlFor="lastname">Apellido</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          value={user.lastname}
          onChange={handleUser}
          required
        />
      </div>
      <div className="form">
        <label htmlFor="address">Direccion</label>
        <input
          type="text"
          id="address"
          name="address"
          value={user.address}
          onChange={handleUser}
          required
        />
      </div>
      <div className="form">
        <label htmlFor="phone">Teléfono</label>
        <input
          type="number"
          id="phone"
          name="phone"
          value={user.phone}
          onChange={handleUser}
          required
        />
      </div>
      <div className="form">
        <label htmlFor="email">Correo</label>
        <input
          type="email"
          id="email"
          name="email"
          value={user.email}
          onChange={handleUser}
          required
        />
      </div>
      <div className="form">
        <label htmlFor="password">Clave</label>
        <input
          type="password"
          id="password"
          name="password"
          value={user.password}
          onChange={handleUser}
          autoComplete="on"
          required
        />
      </div>
      <div className="form">
        <button>Registrar</button>
      </div>
    </form>
  )
}

export default Register

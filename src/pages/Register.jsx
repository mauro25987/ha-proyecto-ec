import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../components/Layout.css"

const Register = () => {
  const navigate = useNavigate()
  //const [response, setResponse] = useState(null)

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
      const response = await axios.post("https://ha-videoclub-api-g2.vercel.app/users", user, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      console.log(response)
    } catch (error) {
      console.log("error test", error)
    }

    navigate("/")
  }

  return (
    <form className="main-contain" onSubmit={handleSubmit}>
      Registro de usuario:
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
      <div>
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
      <div>
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
      <div>
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
      <div>
        <button>Registrar</button>
      </div>
    </form>
  )
}

export default Register

// "firstname": "María",
// "lastname": "Ortiz",
// "address": "Yi 2266",
// "phone": "099776655",
// "email": "algo@server.com",
// "password": "abc123"

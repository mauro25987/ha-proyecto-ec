import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { registerUser } from "../api/vercel"
import "../components/Layout.css"

const Register = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

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
    setLoading(true)
    const { data, error } = await registerUser(user)
    if (data) {
      navigate("/")
    }
    if (error) {
      setError(error)
    }
    setLoading(false)
  }

  if (loading) {
    return <div>Registrando usuario</div>
  }

  return (
    <div>
      <form className="form-register" onSubmit={handleSubmit}>
        <h3 className="form">Registro de usuario</h3>
        <div className="form">
          <label htmlFor="firstname">Nombre</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={user.firstname}
            onChange={handleUser}
            placeholder="María"
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
            placeholder="Pérez"
            required
          />
        </div>
        <div className="form">
          <label htmlFor="address">Dirección</label>
          <input
            type="text"
            id="address"
            name="address"
            value={user.address}
            onChange={handleUser}
            placeholder="Avenida Brasil"
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
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleUser}
            placeholder="example@gmail.com"
            required
          />
        </div>
        <div className="form">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleUser}
            autoComplete="on"
            placeholder="contraseña"
            required
          />
        </div>
        <div className="form">
          <button>Registrarse</button>
        </div>
        {error && <div>{error}</div>}
      </form>
    </div>
  )
}

export default Register

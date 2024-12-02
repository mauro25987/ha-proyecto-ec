import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { loginUser } from "../api/vercel"
import "../components/Layout.css"
import { setToken } from "../reducer/authSlice"

function ModalLogin({ showModaLogin, SetShowModaLogin, handleBackToCart }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState({ email: "", password: "" })
  const [error, setError] = useState(null)

  const handleUser = e => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    const { data, error } = await loginUser(user)
    if (data) {
      const { token, userId } = data
      dispatch(setToken({ token, userId }))
      SetShowModaLogin(!showModaLogin)
    }
    if (error) {
      setError(error)
    }
    setLoading(false)
  }

  if (loading) {
    return <div>Logeando usuario</div>
  }

  return (
    <div className="form-register">
      <h2>Iniciar Sesión para hacer la Compra</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleUser}
            placeholder="Email"
            required
          />
        </div>
        <div>
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleUser}
            placeholder="Contraseña"
            autoComplete="on"
          />
        </div>
        <div className="log">
          <button>Login</button>
          <button type="button" onClick={handleBackToCart}>
            Volver atras
          </button>
        </div>
      </form>
      {error && <div>{error}</div>}
    </div>
  )
}

export default ModalLogin
